import React, { useState, useRef, useEffect, forwardRef } from "react";

const VideoPlayer = ({ videoScr, forwardedRef }, ref) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const refToUse = forwardedRef || videoRef;

  const playVideo = () => {
    const video = refToUse.current;
    if (video && !isPlaying) {
      video
        .play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch((error) => {
          console.error("Video play error:", error);
        });
    }
  };

  const pauseVideo = () => {
    const video = refToUse.current;
    if (video && isPlaying) {
      video.pause();
      setIsPlaying(false);
    }
  };

const stopAndResetVideo = () => {
  const video = videoRef.current;
  if (video) {
    video.pause();
    video.currentTime = 0;
    setIsPlaying(false);
  }
};


const checkIfInViewport = () => {
  const rect = videoRef.current?.getBoundingClientRect();
  const viewportHeight = window.innerHeight;

  if (rect) {
    const elementCenter = rect.top + rect.height / 2;
    const viewportCenter = viewportHeight / 2;

    if (Math.abs(elementCenter - viewportCenter) < 200) {
      if (!isPlaying) {
        stopAndResetVideo();
      }
    } else {
      if (isPlaying) {
        stopAndResetVideo();
      }
    }
  }
};

  useEffect(() => {
    checkIfInViewport();
  }, [videoScr]);

  return (
    <video
      ref={refToUse}
      src={videoScr}
      width={600}
      muted
      onClick={playVideo}
    />
  );
};

export default forwardRef(VideoPlayer);
