import styled from "styled-components";
import { FlexRow, FlexCol, PosRelative } from "../../../../../../config/globalStyle";

export const CommentsBoxStyle = styled.div`
${PosRelative}
  margin-right: 10px;
  margin-left:10px;
  gap:20px;
  ${FlexCol}
  padding: 24px;
  border-radius: 12px;
  color: #1d1e281a;
  border: 2px solid rgba(255, 255, 255, 0.1215686275);
  @media (max-width: 361px) {
   
  }
`;

export const CommentBoxContent = styled.div`
${FlexCol}
  gap: 24px;
`;

export const CommentName = styled.div`
  font: 500 14px 'yekanBakh';
  line-height: 24px;
  text-align: right;
  color: #a4a6bc;
`;

export const CommentText = styled.div`
  font: 500 16px 'yekanBakh';
  height: 112px;
  line-height: 28px;
  text-align: right;
  color: #f2f2f2;
`;

export const CommentInfo = styled.div`
${FlexRow}
  justify-content: space-between;
  justify: space-between;
`;

export const CommentDate = styled.div`
  font: 500 12px 'yekanBakh';
  line-height: 16px;
  text-align: right;
  color: #a4a6bc;
`;
