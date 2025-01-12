import React from "react";
import {
  CardBox,
  CardContentBox,
  CardContentTitle,
  CardUsername,
  UsernameText,
} from "./style";
import VideoPlayer from "../VideoPlayer";

const VideoCard = ({ video, title, username, forwardedRef }) => {
  return (
    <CardBox>
      <VideoPlayer videoScr={video} forwardedRef={forwardedRef} />
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
