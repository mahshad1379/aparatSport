import React from "react";
import {
  CardBox,
  CardContentBox,
  CardContentTitle,
  CardUsername,
  UsernameText,
} from "./style";
import VideoPlayer from "../VideoPlayer";

const VideoCard = ({ video, title, username }) => {
  return (
    <CardBox>
      <VideoPlayer videoScr={video} />
      <CardContentBox>
        <CardContentTitle>{title}</CardContentTitle>
        <CardUsername>
          <UsernameText>{username}</UsernameText>
        </CardUsername>
      </CardContentBox>
    </CardBox>
  );
};

export default VideoCard;
