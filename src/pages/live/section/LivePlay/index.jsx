import React from "react";
import { LivePlayContainer, LivePlayImg, LivePlayVideo } from "./style";
import { MainContainer } from "../../../../config/globalStyle";
import videojs from "video.js";
import "video.js/dist/video-js.css";
import Hls from "hls.js";
  
const LivePlay = ({ data }) => {

  const videoElement = document.getElementById("my-player");
  console.log("v",videoElement)
  const player = videojs(videoElement, {
    autoplay: false,
    controls: true,
    preload: "auto",
    fluid: true,
  });

  if (Hls.isSupported()) {
    const hls = new Hls();
    hls.loadSource(data.m3u8);
    hls.attachMedia(player.tech_.el_);
    hls.on(Hls.Events.MANIFEST_PARSED, function () {
      player.play();
    });
  } else if (player.canPlayType("application/vnd.apple.mpegurl")) {
    player.src({ src: data.m3u8, type: "application/vnd.apple.mpegurl" });
    player.play();
  }

  return (
    <MainContainer>
      <LivePlayContainer>
        {data?.live_status === "live" ? (
          <LivePlayVideo>
            <video id='my-player'></video>
          </LivePlayVideo>
        ) : (
          <LivePlayImg src={data?.thumb_website} />
        )}
      </LivePlayContainer>
    </MainContainer>
  );
};

export default LivePlay;
