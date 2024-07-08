import React from "react";
import { MainImage, ButtonImage, TopImage } from "./styles.js";
import {
  OptionBoxStyle,
  OptionBoxContent,
  OptionBoxHeader,
  OptionBoxText,
} from "../../styles.js";

const SecondImage = () => {
  return (
    <OptionBoxStyle>
      <OptionBoxContent>
        <OptionBoxHeader>تماشای رایگان با کیفیت HD</OptionBoxHeader>
        <OptionBoxText>با موبایل، لپتاپ، تلویزیون و ...</OptionBoxText>
      </OptionBoxContent>
      <MainImage src="/img/option/HD-Mobile.png" />
      <ButtonImage src="/img/option/Devices2.png" />
      <TopImage src="/img/option/hd-quality 1.png" />
    </OptionBoxStyle>
  );
};

export default SecondImage;
