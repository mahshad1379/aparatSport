import { styled } from "styled-components";
import { FlexCol, FlexRow } from "../../../../../config/globalStyle";

export const InfoBox = styled.div`
  ${FlexCol}
  padding: 24px;
  gap: 10px;
  border-radius: 16px 0px 16px 0px;
  background: #11121a;
  opacity: 95%;
`;

export const Title = styled.div`
  font: 700 20px "yekanBakh";
  line-height: 24px;
  text-align: right;
  color: #f2f2f2;
`;

export const Details = styled.div`
  ${FlexRow}
  gap: 10px;
  direction: rtl;
`;

export const Time = styled.div`
  font: 500 14px "yekanBakh";
  color: #eff8ea;
  line-height: 20px;
  text-align: right;
`;

export const Date = styled.div`
  font: 500 14px "yekanBakh";
  color: #78c249;
  line-height: 20px;
  text-align: right;
`;
