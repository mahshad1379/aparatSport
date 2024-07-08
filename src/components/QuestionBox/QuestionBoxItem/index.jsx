import { useState } from "react";
import Arrow from "../../../Arrow";
import { ARROW_UP, ARROW_DOWN } from "../../../../constant/arrow.js";
import {
  QuestionBoxItemStyle,
  QuestionBoxUpside,
  QuestionBoxUpsideText,
  QuestionBoxDownSide,
  QuestionBoxDownSideText,
} from "./styles.js";

const QuestionBoxItem = ({ answer, question }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <QuestionBoxItemStyle>
      <QuestionBoxUpside>
        <QuestionBoxUpsideText>{question}</QuestionBoxUpsideText>
        <div onClick={() => setShowAnswer(!showAnswer)}>
          {showAnswer ? (
            <Arrow arrow={ARROW_DOWN} />
          ) : (
            <Arrow arrow={ARROW_UP} />
          )}
        </div>
      </QuestionBoxUpside>
      {showAnswer ? (
        <QuestionBoxDownSide>
          <QuestionBoxDownSideText>{answer}</QuestionBoxDownSideText>
        </QuestionBoxDownSide>
      ) : (
        ""
      )}
    </QuestionBoxItemStyle>
  );
};
export default QuestionBoxItem;
