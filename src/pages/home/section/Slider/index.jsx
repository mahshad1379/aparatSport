import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ImgContainer, SliderContainer } from "./stayle";

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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-arrow-left-circle"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"
          />
        </svg>
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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-arrow-right-circle"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"
          />
        </svg>
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
