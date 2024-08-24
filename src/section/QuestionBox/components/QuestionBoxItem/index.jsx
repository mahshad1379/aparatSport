import { useState } from "react";
import {
  QuestionBoxItemStyle,
  QuestionBoxUpside,
  QuestionBoxUpsideText,
  QuestionBoxDownSide,
  QuestionBoxDownSideText,
} from "./styles.js";
import Icon from "../../../../Icon/index.jsx";

const QuestionBoxItem = ({ answer, question }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <QuestionBoxItemStyle>
      <QuestionBoxUpside>
        <QuestionBoxUpsideText>{question}</QuestionBoxUpsideText>
        <div onClick={() => setShowAnswer(!showAnswer)}>
          {showAnswer ? (
            <Icon
            style={{
              padding: "8.25px 4.25px 8.25px 4.25px",
              textAlign: "center",
            }}
            name={"arrow_down"}
            width="16"
            height="8"
            viewBox="0 0 16 8"
            fill="none"
          />
          ) : (
            <Icon
              style={{
                padding: "8.25px 4.25px 8.25px 4.25px",
                textAlign: "center",
              }}
              name={"arrow_up"}
              width="16"
              height="8"
              viewBox="0 0 16 8"
              fill="none"
            />
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
