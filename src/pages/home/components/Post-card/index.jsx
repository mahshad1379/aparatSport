import React from "react";
import {
  CardBox,
  CardContentBox,
  CardContentTitle,
  CardDetails,
  CardImageContainer,
  CardReporter,
  CardTime,
  TimeText,
} from "./stayle";
import Icon from "../../../../Icon/index";

const PostCard = ({ Img, title, reporter, time }) => {
  return (
    <CardBox>
      <CardImageContainer src={Img} />
      <CardContentBox>
        <CardContentTitle>{title}</CardContentTitle>
        <CardDetails>
          <CardReporter>{reporter}</CardReporter>
          <CardTime>
            <TimeText>{time}</TimeText>
            <Icon
              name={"clock"}
              strokeColor="white"
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
            />
          </CardTime>
        </CardDetails>
      </CardContentBox>
    </CardBox>
  );
};

export default PostCard;
