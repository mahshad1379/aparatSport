import { styled } from "styled-components";
import {
  FlexCol,
  FlexRow,
  PosAbsolute,
  PosRelative,
} from "../../../../config/globalStyle";

export const LivePlayContainer = styled.div`
  ${FlexCol}
  gap:10px;
  align-items: flex-start;
`;
export const LivePlayContent = styled.div`
  ${FlexCol}
  justify-content: space-between;
  width: 100%;
  gap: 20px;
`;
export const ContentText = styled.div`
  ${FlexRow}
  justify-content: space-between;
`;
export const LeftContent = styled.div`
  ${FlexRow}
`;
export const ShareIcon = styled.div`
  ${PosRelative}
  margin-right:50px;
  color: #ff9901;
  &:before {
    content: "";
    ${PosAbsolute}
    width: 20px;
    border: 1px solid #ffffff14;
    transform: rotate(90deg);
    left: 30px;
    top: 6px;
  }
`;
export const LivePlayTimer = styled.div`
  ${FlexRow}
`;
export const Result = styled.div`
  ${FlexRow}
  gap:5px;
  font: 700 14px "yekanBakh";
  line-height: 16px;
  text-align: right;
  color: #e7e9f2;
`;
export const ResultText = styled.div``;
export const RightContent = styled.div``;
export const Title = styled.div`
  font: 700 20px "yekanBakh";
  line-height: 24px;
  text-align: right;
  color: #ffffff;
`;
export const ContentDetail = styled.div`
  ${FlexRow}
  justify-content: space-between;
  font: 500 14px "yekanBakh";
  line-height: 20px;
  text-align: right;
  color: #e7e9f2;
`;
export const LivePlayReporter = styled.div`
  ${FlexRow}
  gap: 5px;
`;
export const ReporterName = styled.div`
  font: 500 14px "yekanBakh";
  line-height: 20px;
  text-align: right;
  color: #e7e9f2;
`;
export const Tags = styled.div`
  ${FlexRow}
  gap:7px;
`;
export const LivePlayWarning = styled.div`
  ${FlexRow}
  align-items:center;
  gap: 5px;
  padding: 8px;
  border-radius: 8px;
  background: #1b1c26;
  border: 1px solid #282a37;
`;

export const WarningText = styled.div`
  font: 700 12px "yekanBakh";
  line-height: 16px;
  text-align: right;
  color: #f6c22e;
`;
