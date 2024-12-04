import React from 'react'
import CTASection from "../section/CTASection";
import Comments from "../section/Comments";
import MainPart from "../section/MainPart";
import OptionBox from "../section/OptionBox";
import QuestionBox from "../section/QuestionBox";
import TVPart from "../section/TvPart";
import { Style, UpSide } from "./style.js";

const DownloadPage = () => {
  return (
    <Style>      
    <UpSide>
      <MainPart />
    </UpSide>
    <TVPart/>
    <OptionBox/>
    <Comments/>
    <CTASection/>
    <QuestionBox />
  </Style>
  )
}

export default DownloadPage