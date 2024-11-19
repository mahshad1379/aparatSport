import React from "react";
import { MainImage, ButtonImage, TopImage } from "./styles.js";
import {
  OptionBoxStyle,
  OptionBoxContent,
  OptionBoxHeader,
  OptionBoxText,
} from "../../styles.js";

const ThirdImage = () => {
  return (
    <OptionBoxStyle>
      <OptionBoxContent>
        <OptionBoxHeader>امکان چت حین تماشای بازی</OptionBoxHeader>
        <OptionBoxText>چت با هواداران تیم‌ها حین تماشای پخش زنده</OptionBoxText>
      </OptionBoxContent>
      <MainImage src="/assets/img/option/Chat-Mobile.png" />
      <ButtonImage src="/assets/img/option/Chat Elements.png" />
      <TopImage src="/assets/img/option/Heart.png" />
    </OptionBoxStyle>
  );
};

export default ThirdImage;
