import styled from "styled-components";

export const CommentStyle = styled.div`
  padding: 0px 96px 0px 96px;
  margin-top: 70px;

  @media (max-width: 361px) {
    padding: 0px;
  }
`;

export const CommentUpside = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 40px;
  justify-content: space-between;

  @media (max-width: 361px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const CommentContent = styled.div`
  display: flex;
  flex-direction: row;
  gap: 24px;

  @media (max-width: 361px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const CommentContentText = styled.div`
  font: 500 14px 'yekanBakh';
  font-size: 28px;
  line-height: 32px;
  text-align: right;
  color: #ffffff;

  @media (max-width: 361px) {
    text-align: center;
  }
`;

export const CommentRateBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
`;

export const CommentArrow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;

  @media (max-width: 361px) {
    display: none;
  }
`;

export const ArrowBox = styled.div`
position: absolute;
  text-align: center;
  padding: 12px;
  border-radius: 12px;
  background-color: #1d1e281a;
  border: 2px solid #3939391f;
  cursor: pointer;
`;

export const CommentDownside = styled.div`
  // position: relative;
  // display: flex;
  // flex-direction: row;
  // justify-content: start;
  // gap: 16px;
  overflow: scroll hidden;
  scroll-behavior: smooth;
  flex-wrap: nowrap;
  // width: 100%;
  // margin-top: 32px;
  scrollbar-width: none;
`;