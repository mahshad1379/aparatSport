import React from "react";
import { RateBoxStyle, RateBoxPoint, RateBoxPointText } from "./styles.js";
import Icon from "../../../../../../Icon/index.jsx";

const RateBox = ({ logo, point }) => {
  return (
    <RateBoxStyle>
      <img src={logo} alt="logo" />
      <RateBoxPoint>
        <RateBoxPointText>{point}</RateBoxPointText>
        <Icon
          name={"star"}
          width="17px"
          height="16px"
          viewBox="0 0 17 16"
          fill="none"
        />
      </RateBoxPoint>
    </RateBoxStyle>
  );
};

export default RateBox;
