import { styled } from "styled-components";
import { FlexRow, FlexCol } from "../../config/globalStyle";

export const CardBox = styled.div`
  background: #1b1c26;
  border-radius: 8px;
  border: 1px solid #282a37;
`;

export const CardImageContainer = styled.img`
  height: 191px;
  border-radius: 8px;
  background: #f2f2f2;
`;

export const CardContentBox = styled.div`
  font: 500 14px "yekanBakh";
  color: #f2f2f2;
  ${FlexCol}
  height: 100px;
  justify-content: space-between;
`;

export const CardContentTitle = styled.div`
  font: 500 14px "yekanBakh";
  line-height: 24px;
  text-align: right;
  color: #F2F2F2;
  padding: 0 13px;
`;

export const CardDetails = styled.div`
  ${FlexRow}
  justify-content: space-between;
  align-items: center;
`;

export const CardReporter = styled.div`
  font: 500 14px "yekanBakh";
  line-height: 24px;
  text-align: right;
  color: #A4A6BC;
  padding: 0 13px;
`;

export const CardTime = styled.div`
  ${FlexRow}
  align-items: center;
  gap: 5px;
  padding: 8px 12px 8px 12px;
  border-radius: 0px 8px 0px 8px;
  background: #202231;
`;

export const TimeText = styled.div``;
