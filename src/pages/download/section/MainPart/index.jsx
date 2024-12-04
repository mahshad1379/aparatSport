import React from "react";
import { MainPartStyle, Img } from "./style.js";
import Slideshow from "./components/Slideshow";
import Content from "./components/Content";
import { MainContainer } from "../../../../config/globalStyle.js";

const MainPart = () => {
  return (
    <MainContainer>
      <MainPartStyle>
        <Content />
        <Img src="/assets/img/main-page/Devices.png" alt="sport" />
      </MainPartStyle>
      <Slideshow />
    </MainContainer>
  );
};

export default MainPart;
