import React from "react";
import { MainImage, ButtonImage, TopImage } from "./styles.js";
import {
  OptionBoxStyle,
  OptionBoxContent,
  OptionBoxHeader,
  OptionBoxText,
} from "../../styles.js";

const FirstImage = () => {
  return (
    <OptionBoxStyle>
      <OptionBoxContent>
        <OptionBoxHeader>امکان انتخاب گزارشگر</OptionBoxHeader>
        <OptionBoxText>گزارشگر فارسی، انگلیسی، عربی و ...</OptionBoxText>
      </OptionBoxContent>
      <MainImage src="/img/option/Commentator-Mobile.png" />
      <ButtonImage src="/img/option/Commentator Element.png" />
      <TopImage src="/img/option/Mic.png" />
    </OptionBoxStyle>
  );
};

export default FirstImage;
