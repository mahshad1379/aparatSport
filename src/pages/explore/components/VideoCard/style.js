import { styled } from "styled-components";
import { FlexRow, FlexCol, DisplayFlex } from "../../../../config/globalStyle";

export const CardBox = styled.div`
  background: #1b1c26;
  border-radius: 8px;
  border: 1px solid #282a37;
  width: min-content;
  padding: 50px 0;
`;

export const CardContentBox = styled.div`
  font: 500 14px "yekanBakh";
  color: #f2f2f2;
  ${FlexCol}
  justify-content: space-between;
`;

export const CardContentTitle = styled.div`
  font: 500 14px "yekanBakh";
  line-height: 24px;
  text-align: right;
  color: #f2f2f2;
  padding: 0 13px;
`;

export const CardUsername = styled.div`
  ${FlexRow}
  font: 500 14px "yekanBakh";
  line-height: 24px;
  text-align: right;
  color: #a4a6bc;
  padding: 0 13px;
`;

export const UsernameText = styled.div``;
