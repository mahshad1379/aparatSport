import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ImgContainer, SliderContainer } from "./stayle";
import Icon from "../../../../Icon";

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
    <SliderContainer>
      <Slider {...settings}>
        {data?.slider?.map((item) => (
          <ImgContainer src={item.thumb_website} />
        ))}
      </Slider>
    </SliderContainer>
  );
};

export default SliderPart;
