import React , {useState} from "react";
import QUESTION_ITEM from "../../constant/questionItem";
import QuestionBoxItem from "./components/QuestionBoxItem";
import {
  MainContainer,
  QuestionPartContainer,
  QuestionPartContent,
  QuestionPartHeader,
  QuestionPartText,
  QuestionBoxContainer,
} from "./styles.js";

const QuestionBox = () => {
  const [openKey, setOpenKey] = useState(null);
  // const [show, setShow] = useState(false);

  const handleOpenAccordion = (index) => {
    setOpenKey(openKey === index ? null : index);
    // setShow(!show);
  };
  return (
    <MainContainer>
      <QuestionPartContainer>
        <QuestionPartContent>
          <QuestionPartHeader>سوالات متداول</QuestionPartHeader>
          <QuestionPartText>
            سوال شایع دیگر کاربران، شاید برای شما هم پیش آمده باشد
          </QuestionPartText>
        </QuestionPartContent>
        <QuestionBoxContainer>
          {QUESTION_ITEM.map((item, index) => (
            <QuestionBoxItem answer={item.answer} question={item.question} handleOpenAccordion={handleOpenAccordion}
            openKey={openKey}/>
          ))}
        </QuestionBoxContainer>
      </QuestionPartContainer>
    </MainContainer>
  );
};

export default QuestionBox;
