import styled from "styled-components";
import {
  FlexRow,
  FlexCol,
  DisplayFlex,
  PosRelative,
  PosAbsolute,
} from "../../config/globalStyle";

export const OptionBoxStyle = styled.div`
  ${DisplayFlex}
  ${PosRelative}
  justify-content: center;
  width: 27.5%;
  height: 614px;
  border-radius: 16px;
  background: #0a0b10;
  border: 1px solid;
  overflow: hidden;

  @media (max-width: 751px) {
    width: 65%;
    margin-top: 100px;
    flex-shrink: 0;
  }

  @media (max-width: 361px) {
    width: 90%;
    margin-bottom: 16px;
    flex-shrink: 0;
    height: 370px;
  }
`;

export const OptionBoxContent = styled.div`
  ${PosAbsolute}
  ${FlexCol}
  align-items: center;
  justify-content: center;
  top: 56px;

  @media (max-width: 361px) {
    top: 24px;
    gap: 8px;
  }
`;

export const OptionBoxHeader = styled.h3`
  font: 800 20px "yekanBakh";
  line-height: 24px;
  color: #ffffff;
  text-align: center;
  margin: 0;

  @media (max-width: 361px) {
    font-size: 16px;
  }
`;

export const OptionBoxText = styled.div`
  font: 500 14px "yekanBakh";
  line-height: 24px;
  color: #a4a6bc;
  text-align: center;

  @media (max-width: 361px) {
    font-size: 11px;
  }
`;

export const OptionPartStyle = styled.div`
  ${FlexRow}
  justify-content: center;
  margin: 40px 0;
  gap: 16px;

  @media (max-width: 751px) {
    justify-content: start;
    flex-wrap: nowrap;
    overflow: scroll hidden;
    padding: 0 20px;
  }
`;
