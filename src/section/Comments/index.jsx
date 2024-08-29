import React from "react";
import COMMENT_ITEM from "../../constant/commentItem";
import CommentsBox from "./components/CommentsBox";
import RateBox from "./components/RateBox";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MainContainer } from "../../config/globalStyle";
import Icon from "../../Icon/index.jsx";

import {
  CommentStyle,
  CommentUpside,
  CommentContent,
  CommentContentText,
  CommentRateBox,
  CommentArrow,
  ArrowBox,
} from "./styles.js";

const NextArrow = (props) => {
  const { style, onClick } = props;

  return (
    <ArrowBox
      style={{ ...style, bottom: "270px", left: "70px" }}
      onClick={onClick}
    >
      <Icon
        name={"arrow_right"}
        width="24px"
        height="24px"
        viewBox="0 0 24 24"
        className
        fill="none"
      />
    </ArrowBox>
  );
};
const PreArrow = (props) => {
  const { style, onClick } = props;

  return (
    <ArrowBox
      style={{ ...style, bottom: "270px", left: "10px" }}
      onClick={onClick}
    >
      <Icon
        name={"arrow_left"}
        width="24px"
        height="24px"
        viewBox="0 0 24 24"
        fill="none"
      />
    </ArrowBox>
  );
};

const Comments = () => {
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PreArrow />,
    initialSlide: 0,
    arrows: true,
    responsive: [
      {
        breakpoint: 751,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 361,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };

  return (
    <CommentStyle>
      <MainContainer>
        <CommentUpside>
          <CommentContent>
            <CommentContentText>نظر کاربران آپارات اسپرت</CommentContentText>
            <CommentRateBox>
              <RateBox
                logo={"/assets/img/comments/Baazar logo.png"}
                point={4.6}
              />
              <RateBox
                logo={"/assets/img/comments/Myket Logo.png"}
                point={4.7}
              />
            </CommentRateBox>
          </CommentContent>
          <CommentArrow></CommentArrow>
        </CommentUpside>
        <Slider {...settings}>
          {COMMENT_ITEM.map((item) => {
            return (
              <CommentsBox
                name={item.name}
                text={item.text}
                date={item.date}
                logo={item.logo}
              />
            );
          })}
        </Slider>
      </MainContainer>
    </CommentStyle>
  );
};

export default Comments;
