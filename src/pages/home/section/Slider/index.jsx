import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  ImgContainer,
  SliderContainer,
  SliderBox,
  TimerBox,
  InfoBox,
} from "./style";
import Icon from "../../../../Icon";
import { MainContainer } from "../../../../config/globalStyle";
import Timer from "../../../../component/Timer";
import ImageInfo from "./Info";

const SliderPart = ({ data }) => {
  const PreArrow = (props) => {
    const { style, onClick } = props;
    return (
      <div
        onClick={onClick}
        style={{
          ...style,
          color: "white",
          position: "absolute",
          zIndex: "1",
          bottom: "50%",
          left: "2%",
          transform: "translate(-2%, -50%)",
        }}
      >
        <Icon
          name={"preArrow"}
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-arrow-left-circle"
          viewBox="0 0 16 16"
        />
      </div>
    );
  };
  const NextArrow = (props) => {
    const { style, onClick } = props;
    return (
      <div
        onClick={onClick}
        style={{
          ...style,
          color: "white",
          position: "absolute",
          zIndex: "1",
          bottom: "50%",
          right: "2%",
          transform: "translate(-2%, -50%)",
        }}
      >
        <Icon
          name={"nextArrow"}
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-arrow-right-circle"
          viewBox="0 0 16 16"
        />
      </div>
    );
  };
  var settings = {
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow to="right" />,
    prevArrow: <PreArrow to="left" />,
    initialSlide: 0,
    arrows: true,
  };

  return (
    <MainContainer>
      <SliderContainer>
        <Slider {...settings}>
          {data?.slider?.map((item) => (
            <SliderBox>
              <TimerBox>
                <Timer time={item.start_time} isLive={false}/>
              </TimerBox>
              <ImgContainer src={item.thumb_website} />
              <InfoBox>
                <ImageInfo title={item.title} time={item.start_time} />
              </InfoBox>
            </SliderBox>
          ))}
        </Slider>
      </SliderContainer>
    </MainContainer>
  );
};

export default SliderPart;
