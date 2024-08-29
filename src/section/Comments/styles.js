import styled from "styled-components";
import {FlexRow , FlexCol, PosAbsolute} from "../../config/globalStyle"


export const CommentStyle = styled.div`
  padding: 0px 96px 0px 96px;
  margin-top: 70px;

  @media (max-width: 741px) {
    padding: 0px;
  }
`;

export const CommentUpside = styled.div`
  ${FlexRow}
  margin-bottom: 40px;
  justify-content: space-between;

  @media (max-width: 741px) {
    ${FlexCol}
    align-items: center;
  }
`;

export const CommentContent = styled.div`
${FlexRow}
  gap: 24px;

  @media (max-width: 741px) {
    ${FlexCol}
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
${FlexRow}
  gap: 8px;
`;

export const CommentArrow = styled.div`
${FlexRow}
  gap: 12px;
`;

export const ArrowBox = styled.div`
${PosAbsolute}
  text-align: center;
  padding: 12px;
  border-radius: 12px;
  background-color: #1d1e281a;
  border: 2px solid #3939391f;
  cursor: pointer;
`;

export const CommentDownside = styled.div`
  flex-wrap: nowrap;
`;
