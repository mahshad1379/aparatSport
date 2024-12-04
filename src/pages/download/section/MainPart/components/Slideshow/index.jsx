import React from "react";
import SLIDE_ITEM from "../../../../../../constant/slideshowItem.js";
import { SlideshowStyle, Img } from "./styles.js";
import Slider from "react-infinite-logo-slider";

const Slideshow = () => {
  return (
    <SlideshowStyle>
      <Slider duration={70} pauseOnHover={true} toRight={true}>
        {SLIDE_ITEM.map((item) => (
          <Slider.Slide>
            <Img src={item.coloredImg} alt="logo" />
          </Slider.Slide>
        ))}
      </Slider>
    </SlideshowStyle>
  );
};

export default Slideshow;
