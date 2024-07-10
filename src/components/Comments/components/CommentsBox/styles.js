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
  font: 500 14px 'yekanBakh';
  line-height: 24px;
  text-align: right;
  color: #a4a6bc;
`;

export const CommentText = styled.div`
  width: 357.33px;
  height: 112px;
  font: 500 16px 'yekanBakh';
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
  font: 500 12px 'yekanBakh';
  line-height: 16px;
  text-align: right;
  color: #a4a6bc;
`;

export const CommentLogo = styled.img``;
