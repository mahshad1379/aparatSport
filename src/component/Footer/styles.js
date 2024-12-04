import styled from "styled-components";
import { FlexCol, FlexRow, DisplayFlex } from "../../config/globalStyle";

export const FooterContainer = styled.div`
${FlexRow}
  align-items: center;
  justify-content: space-between;
`;

export const Container = styled.div`
${FlexRow}
  padding: 7px 152px 7px 152px;
  border: 1px;
  justify-content: space-between;
  background: #1b1c26;
  border-top: 1px solid #282a37;

  @media (max-width: 741px) {
    ${FlexCol}
  }
`;

export const RightPart = styled.div`
${FlexRow}
  gap: 55px;
`;

export const Content = styled.div`
${FlexRow}
`;

export const LeftPart = styled.div`
${FlexRow}
  gap: 23px;
`;

export const LiveBrodcast = styled.div`
${FlexRow}
`;

export const Item = styled.div`
  font: 500 13px "yekanBakh";
  line-height: 16px;
  letter-spacing: 0.4000000059604645px;
  text-align: center;
  margin-left: 10px;
  color: ${(props) => (props.green ? "#78C249" : "#F2F2F2")};
`;
