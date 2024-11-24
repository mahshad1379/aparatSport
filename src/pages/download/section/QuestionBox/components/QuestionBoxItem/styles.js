import styled from "styled-components";
import { DisplayFlex } from "../../../../../../config/globalStyle.js";

export const QuestionBoxItemStyle = styled.div`
  padding: 16px 24px 16px 24px;
  gap: 16px;
  border-radius: 8px;
  background: #1d1e28;
  border: 2px solid #ffffff14;
  width: 60%;
  margin-bottom: 16px;

  @media (max-width: 1281px) {
    width: 70%;
  }

  @media (max-width: 741px) {
    width: 100%;
  }
`;

export const QuestionBoxUpside = styled.div`
  ${DisplayFlex}
  justify-content: space-between;
`;

export const QuestionBoxUpsideText = styled.div`
  font: 800 16px "yekanBakh";
  line-height: 24px;
  text-align: right;
  color: #78c248;

  @media (max-width: 361px) {
    font-size: 12px;
  }
`;

export const QuestionBoxDownSide = styled.div`
  margin-top: 16px;
  border-radius: 8px;
  border: 2px;
`;

export const QuestionBoxDownSideText = styled.div`
  font: 500 14px "yekanBakh";
  line-height: 24px;
  text-align: right;
  color: #e7e9f2;

  @media (max-width: 361px) {
    font-size: 12px;
  }
`;
