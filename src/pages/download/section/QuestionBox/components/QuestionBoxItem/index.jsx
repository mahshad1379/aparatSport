import {
  QuestionBoxItemStyle,
  QuestionBoxUpside,
  QuestionBoxUpsideText,
  QuestionBoxDownSide,
  QuestionBoxDownSideText,
} from "./styles.js";
import Icon from "../../../../../../Icon/index.jsx";

const QuestionBoxItem = ({ answer, question , index, openKey, handleOpenAccordion }) => {

  return (
    <QuestionBoxItemStyle>
      <QuestionBoxUpside>
        <QuestionBoxUpsideText>{question}</QuestionBoxUpsideText>
        <div onClick={() => handleOpenAccordion(index)}>
          {openKey === index ? (
            <Icon
            style={{
              padding: "8.25px 4.25px 8.25px 4.25px",
              textAlign: "center",
            }}
            name={"arrow_down"}
            width="16px"
            height="8px"
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
              width="16px"
              height="8px"
              viewBox="0 0 16 8"
              fill="none"
            />
          )}
        </div>
      </QuestionBoxUpside>
      {openKey === index ? (
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
