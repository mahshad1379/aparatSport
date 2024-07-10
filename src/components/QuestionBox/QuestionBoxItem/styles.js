import styled from "styled-components";

export const QuestionBoxItemStyle = styled.div`
  padding: 16px 24px 16px 24px;
  gap: 16px;
  border-radius: 8px;
  background: #1d1e28;
  border: 2px solid #ffffff14;
  width: 792px;
  margin-bottom: 16px;

  @media (max-width: 500px) {
    width: 328px;
  }
`;

export const QuestionBoxUpside = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const QuestionBoxUpsideText = styled.div`
  font: 800 16px 'yekanBakh';
  line-height: 24px;
  text-align: right;
  color: #78c248;

  @media (max-width: 500px) {
    font-size: 12px;
  }
`;

export const QuestionBoxDownSide = styled.div`
  margin-top: 16px;
  border-radius: 8px;
  border: 2px;
`;

export const QuestionBoxDownSideText = styled.div`
  font: 500 14px 'yekanBakh';
  line-height: 24px;
  text-align: right;
  color: #e7e9f2;

  @media (max-width: 500px) {
    font-size: 12px;
  }
`;
