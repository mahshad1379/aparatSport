import styled from "styled-components";

export const MainContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  padding-top: 50px;
  box-sizing: border-box;
`;

export const QuestionPartContainer = styled.div`
margin: 100px;
@media (max-width: 361px) {
  margin: 3rem;
}
`;

export const QuestionPartContent = styled.div`
  margin-bottom: 30px;
`;

export const QuestionPartHeader = styled.div`
  font: 800 28px 'yekanBakh';
  line-height: 32px;
  text-align: center;
  color: #ffffff;
  margin-bottom: 8px;

  @media (max-width: 361px) {
    font-size: 20px;
  }
`;

export const QuestionPartText = styled.div`
  font: 500 14px 'yekanBakh';
  line-height: 24px;
  text-align: center;
  color: #a4a6bc;

  @media (max-width: 361px) {
    font-size: 12px;
  }
`;

export const QuestionBoxContainer = styled.div`
  margin-bottom: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 361px) {
    margin-bottom: 0px;
  }
`;
