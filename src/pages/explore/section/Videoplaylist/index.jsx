import React, { useState, useEffect, useRef } from "react";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import VideoCard from "../../components/VideoCard";
import { Button, ButtonContainer, VideoContainer } from "./style";

const PlayList = ({ data }) => {
  const videoRefs = useRef([]);
  const containerRef = useRef(null);
  const [history, setHistory] = useState(data?.data?.attributes?.History || []);
  const [omittedItems, setOmittedItems] = useState([]);

  const moveDown = () => {
    setHistory((prevHistory) => {
      if (prevHistory.length > 1) {
        const [removedItem, ...remainingHistory] = prevHistory;
        setOmittedItems((prevOmitted) => [...prevOmitted, removedItem]);

        console.log("item:", removedItem, "omited1", omittedItems);

        return remainingHistory;
      }
      return prevHistory;
    });

    if (containerRef.current) {
      const firstItem = containerRef.current.children[0];
      firstItem?.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };
  const moveUp = () => {
    setOmittedItems((prevOmitted) => {
      if (prevOmitted.length > 0) {
        const newOmittedItems = [...prevOmitted];
        const restoredItem = newOmittedItems.pop();
        setHistory((prevHistory) => [restoredItem, ...prevHistory]);
        return newOmittedItems;
      }
      return prevOmitted;
    });

    if (containerRef.current) {
      const firstItem = containerRef.current.children[0];
      firstItem?.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  const checkIfInViewport = () => {
    videoRefs.current.forEach((videoElement) => {
      if (videoElement) {
        const rect = videoElement.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        const elementCenter = rect.top + rect.height / 2;
        const viewportCenter = viewportHeight / 2;

        if (Math.abs(elementCenter - viewportCenter) < 200) {
          if (videoElement.paused) {
            videoElement.play().catch((err) => {
              console.log("Video play error:", err);
            });
          }
        } else {
          if (!videoElement.paused) {
            videoElement.pause();
          }
        }
      }
    });
  };

  const handleKeyDown = (event) => {
    if (event.key === "ArrowUp") {
      event.preventDefault();
      moveUp();
    } else if (event.key === "ArrowDown") {
      event.preventDefault();
      moveDown();
    }
  };
  const handleScroll = () => {
    checkIfInViewport();
  };
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleKeyDown, handleScroll]);

  useEffect(() => {
    checkIfInViewport();
  }, [history]);

  return (
    <div>
      <ButtonContainer>
        <Button onClick={moveUp}>
          <FaArrowUp />
        </Button>
        <Button onClick={moveDown}>
          <FaArrowDown />
        </Button>
      </ButtonContainer>
      <VideoContainer>
        {history.map((item, index) => (
          <div key={index}>
            <VideoCard
              video={item.videoUrl}
              title={item.title}
              username={item.author}
              forwardedRef={(el) => (videoRefs.current[index] = el)}
            />
          </div>
        ))}
      </VideoContainer>
    </div>
  );
};

export default PlayList;
