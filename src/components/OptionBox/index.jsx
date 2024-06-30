import React from "react";
import { OptionPartStyle } from "./styles.js";
import FirstImage from "./FirstImage";
import SecondImage from "./SecondImage";
import ThirdImage from "./ThirdImage";

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
