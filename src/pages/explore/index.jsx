import React, { useEffect } from "react";
import { Style } from "./style";
import { useQuery } from "@tanstack/react-query";
import { getVideoData } from "../../service/Video.js";
import PlayList from "./section/Videoplaylist/index.jsx";

const Explore = () => {
  const { data: videoData, isLoading: isLoadingVideo } = useQuery({
    queryKey: ["video_test"],
    queryFn: () => getVideoData(),
  });

  if (isLoadingVideo) {
    return <div>Loading...</div>;
  }

  return (
    <Style>
      <PlayList data={videoData} />
    </Style>
  );
};

export default Explore;
