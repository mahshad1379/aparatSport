import styled from "styled-components";

export const CommentsBoxStyle = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 24px;
  gap: 16px;
  border-radius: 12px;
  color: #1d1e281a;
  border: 2px solid rgba(255, 255, 255, 0.1215686275);
  );
`;

export const CommentBoxContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const CommentName = styled.div`
  font-family: YekanBakhMedium;
  font-size: 14px;
  // font-weight: 325;
  line-height: 24px;
  text-align: right;
  color: #a4a6bc;
`;

export const CommentText = styled.div`
  width: 357.33px;
  height: 112px;
  font-family: YekanBakhMedium;
  font-size: 16px;
  // font-weight: 325;
  line-height: 28px;
  text-align: right;
  color: #f2f2f2;
`;

export const CommentInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  justify: space-between;
`;

export const CommentDate = styled.div`
  font-family: YekanBakhMedium;
  font-size: 12px;
  // font-weight: 325;
  line-height: 16px;
  text-align: right;
  color: #a4a6bc;
`;

export const CommentLogo = styled.img``;
