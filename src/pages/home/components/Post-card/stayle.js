import { styled } from "styled-components";
import { FlexRow, FontDetail, FlexCol } from "../../../../config/globalStyle";

export const CardBox = styled.div`
  background: #1b1c26;
  border-radius: 8px;
  border: 1px solid #282a37;
`;

export const CardImageContainer = styled.img`
  width: 272px;
  height: 176px;
  border-radius: 8px;
  background: #f2f2f2;
`;

export const CardContentBox = styled.div`
  font: 500 14px "yekanBakh";
  color: #f2f2f2;
  ${FlexCol}
  gap:16px;
  height: 100px;
  justify-content: space-around;
  padding: 0 13px;
  position: relative;
`;

export const CardContentTitle = styled.div`
  font: 500 14px "yekanBakh";
  ${FontDetail}
  color: #F2F2F2;
`;

export const CardDetails = styled.div`
  ${FlexRow}
  justify-content: space-between;
`;

export const CardReporter = styled.div`
  font: 500 14px "yekanBakh";
  ${FontDetail}
  color: #A4A6BC;
`;

export const CardTime = styled.div`
  ${FlexRow}
  align-items: center;
  gap: 5px;
  position: absolute;
  bottom: 0px;
  left: 0px;
  padding: 8px 12px 8px 12px;
  border-radius: 0px 8px 0px 8px;
  background: #202231;
`;

export const TimeText = styled.div``;
