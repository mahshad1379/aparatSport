import React from "react";
import { OptionPartStyle } from "./styles.js";
import FirstImage from "./components/FirstImage";
import SecondImage from "./components/SecondImage";
import ThirdImage from "./components/ThirdImage";

const OptionBox = () => {
  return (
    <OptionPartStyle>
      <FirstImage />
      <SecondImage />
      <ThirdImage />
    </OptionPartStyle>
  );
};

export default OptionBox;
