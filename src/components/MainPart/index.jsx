import React from "react";
import { MainPartStyle, Img, MainContainer } from "./style.js";
import Slideshow from "./components/Slideshow";
import Content from "./components/Content";

const MainPart = () => {
  return (
    <MainContainer>
      <MainPartStyle>
        <Content />
        <Img src="/img/main-page/Devices.png" alt="sport" />
      </MainPartStyle>
      <Slideshow />
    </MainContainer>
  );
};

export default MainPart;
