import React from "react";
import { OptionPartStyle } from "./styles.js";
import FirstImage from "./components/FirstImage";
import SecondImage from "./components/SecondImage";
import ThirdImage from "./components/ThirdImage";
import { MainContainer } from "../../config/globalStyle.js";

const OptionBox = () => {
  return (
    <MainContainer>
    <OptionPartStyle>
      <FirstImage />
      <SecondImage />
      <ThirdImage />
    </OptionPartStyle>
    </MainContainer>
  );
};

export default OptionBox;
