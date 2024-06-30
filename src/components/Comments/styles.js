import styled from "styled-components";

export const CommentStyle = styled.div`
  padding: 0px 96px 0px 96px;
  margin-bottom: 70px;
  
  @media (max-width: 500px) {
    padding: 0px;
  }
`;

export const CommentUpside = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 40px;
  display: flex;
  justify-content: space-between;
`;

export const CommentContent = styled.div`
  display: flex;
  flex-direction: row;
  gap: 24px;

  @media (max-width: 500px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const CommentContentText = styled.div`
  width: 279px;
  height: 32px;
  font-family: YekanBakhheavy;
  font-size: 28px;
  // font-weight: 600;
  line-height: 32px;
  text-align: right;
  color: #ffffff;

  @media (max-width: 500px) {
    text-align: center;
  }
`;

export const CommentRateBox = styled.div`
  display: flex;
  flex-direction: row;
  width: 312.13px;
  height: 36px;
  gap: 8px;
`;

export const CommentArrow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;

  @media (max-width: 500px) {
    display: none;
  }
`;

export const ArrowBox = styled.div`
  padding: 12px;
  gap: 16px;
  border-radius: 12px;
  background-color: #1d1e281a;
  border: 2px solid #3939391f;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CommentDownside = styled.div`
  display: flex;
  flex-direction: row;
  // width: 1248px;
  // height: 248px;
  justify-content: start;
  gap: 16px;
  overflow: scroll hidden;
  scroll-behavior: smooth;
  flex-wrap: nowrap;
  width: 100%;
  margin-top: 32px;
  scrollbar-width: none;
`;
