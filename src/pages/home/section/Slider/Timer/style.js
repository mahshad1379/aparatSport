import { styled } from "styled-components";
import { FlexCol, FlexRow } from "../../../../../config/globalStyle";

export const TimerContainer = styled.div`
  ${FlexRow}
  gap: 4px;
`;

export const TimeBox = styled.div`
  ${FlexCol}
  
  width: 40px;
  height: 40px;
  padding: 6px;
  border-radius: 8px;
  background: #1b1c26e5;
  color: #e7e9f2;
  justify-content: center;
  align-items: center;
`;

export const Time = styled.div`
  font: 700 20px "yekanBakh";
  line-height: 24px;
  text-align: center;
`;

export const TimeText = styled.div`
  font: 500 10px "yekanBakh";
  line-height: 16px;
  text-align: center;
`;
