import React from "react";
import { MainPartStyle, Img } from "./style.js";
import Slideshow from "./Slideshow";
import Content from "./Content";

const MainPart = () => {
  return (
    <>
      <MainPartStyle>
        <Content />
        <Img src="/img/main-page/Devices.png" alt="sport" />
      </MainPartStyle>
      <Slideshow />
    </>
  );
};

export default MainPart;
