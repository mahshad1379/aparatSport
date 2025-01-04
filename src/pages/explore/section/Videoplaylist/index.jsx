import React from "react";
import VideoCard from "../../components/VideoCard";
import { VideosContainer } from "./style";

const PlayList = (data) => {
  return (
    <VideosContainer>
      {data?.data?.data?.attributes?.History.map((item) => (
        <>
          <VideoCard
            title={item.title}
            username={item.author}
            video={item.videoUrl}
          />
        </>
      ))}
    </VideosContainer>
  );
};

export default PlayList;
