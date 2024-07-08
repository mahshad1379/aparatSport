import React from "react";
import QUESTION_ITEM from "../../constant/questionItem";
import QuestionBoxItem from "./components/QuestionBoxItem";
import {
  QuestionPartContainer,
  QuestionPartContent,
  QuestionPartHeader,
  QuestionPartText,
  QuestionBoxContainer,
} from "./styles.js";

const QuestionBox = () => {
  return (
    <QuestionPartContainer>
      <QuestionPartContent>
        <QuestionPartHeader>سوالات متداول</QuestionPartHeader>
        <QuestionPartText>
          سوال شایع دیگر کاربران، شاید برای شما هم پیش آمده باشد
        </QuestionPartText>
      </QuestionPartContent>
      <QuestionBoxContainer>
        {QUESTION_ITEM.map((item) => (
          <QuestionBoxItem answer={item.answer} question={item.question} />
        ))}
      </QuestionBoxContainer>
    </QuestionPartContainer>
  );
};

export default QuestionBox;
