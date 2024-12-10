import React from "react";
import CTASection from "./section/CTASection/index.jsx";
import Comments from "./section/Comments/index.jsx";
import MainPart from "./section/MainPart/index.jsx";
import OptionBox from "./section/OptionBox/index.jsx";
import QuestionBox from "./section/QuestionBox/index.jsx";
import TVPart from "./section/TvPart/index.jsx";
import { Style, UpSide } from "./style.js";

const Download = () => {
  return (
    <Style>
      <UpSide>
        <MainPart />
      </UpSide>
      <TVPart />
      <OptionBox />
      <Comments />
      <CTASection />
      <QuestionBox />
    </Style>
  );
};

export default Download;
