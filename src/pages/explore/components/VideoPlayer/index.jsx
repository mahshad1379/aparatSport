import React, { useRef, useEffect, useState } from "react";

const VideoPlayer = ({videoScr}) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const playVideo = () => {
    const video = videoRef.current;
    if (!isPlaying && video) {
      video.play();
      setIsPlaying(true);
    }
  };

  const pauseVideo = () => {
    const video = videoRef.current;
    if (isPlaying && video) {
      video.pause()
      setIsPlaying(false);
    }
  };
  const CheckIfInViewport = () => {
    const rect = videoRef.current.getBoundingClientRect();
    const viewportHeight = window.innerHeight;
    const elementCenter =  rect.top + rect.height / 2;
    const viewportCenter = viewportHeight / 2;

    if (Math.abs(elementCenter - viewportCenter) < 50) {
      playVideo();
    } else {
      pauseVideo();
    }
};
  useEffect(() => {
    const handleScroll = () =>{
      CheckIfInViewport()
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isPlaying]);

  return (
    <video
      ref={videoRef}
      src={videoScr}
      width={600}
      muted
    />
  );
};

export default VideoPlayer;