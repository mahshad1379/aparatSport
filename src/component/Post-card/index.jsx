import React from "react";
import { Link } from "react-router-dom";
import {
  CardBox,
  CardContentBox,
  CardContentTitle,
  CardDetails,
  CardImageContainer,
  CardReporter,
  CardTime,
  TimeText,
} from "./style";
import Icon from "../../Icon/index";

const PostCard = ({ Img, title, reporter, time , uuid}) => {

  return (
    <CardBox>
      <Link to={`/Live/${uuid}`}>
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
      </Link>
    </CardBox>
  );
};

export default PostCard;
