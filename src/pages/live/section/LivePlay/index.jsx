import React, { useEffect, useRef } from "react";
import { LivePlayContainer, LivePlayImg, LivePlayVideo } from "./style";
import { MainContainer } from "../../../../config/globalStyle";
import videojs from "video.js";
import "video.js/dist/video-js.css";
import Hls from "hls.js";

const LivePlay = ({ data }) => {
  const videoRef = useRef(null);
  const playerRef = useRef(null);

  useEffect(() => {
    if (!data?.m3u8 || data.live_status !== "live") return;
    if (playerRef.current) {
      playerRef.current.dispose();
      playerRef.current = null;
    }

    document.getElementById("video_container").innerHTML = `
      <video
        id="player"
        className="video-js"
        style= 'width: 100%;'
      />`;
    videoRef.current = document.getElementById("player");
    if (!videoRef.current) return;

    const videoElement = videoRef.current;
    const player = videojs(videoElement, {
      controls: true,
      autoplay: false,
      muted: true,
      preload: "auto",
      fluid: true,
    });

    playerRef.current = player;
    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(data.m3u8);
      hls.attachMedia(player.tech_.el_);
      hls.on(Hls.Events.ERROR, (event, errorData) => {
        console.error("Hls error:", errorData);
      });
    } else {
      if (player.canPlayType("application/vnd.apple.mpegurl")) {
        player.src({ src: data.m3u8, type: "application/vnd.apple.mpegurl" });
      } else {
        console.error("HLS is not supported in this browser");
      }
    }
    player.on("error", () => {
      console.error("Video.js error:", player.error());
    });
    return () => {
      if (player) {
        player.dispose();
      }
    };
  }, [data.live_status, data.m3u8]);

  return (
    <MainContainer>
      <LivePlayContainer>
        {data?.m3u8 ? (
          <LivePlayVideo id="video_container"></LivePlayVideo>
        ) : (
          <LivePlayImg src={data?.thumb_website} alt="Live Thumbnail" />
        )}
      </LivePlayContainer>
    </MainContainer>
  );
};

export default LivePlay;
