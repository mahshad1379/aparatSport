import styled from "styled-components";
import { FlexRow, PosAbsolute, PosRelative } from "../../../../../../config/globalStyle";

export const RateBoxStyle = styled.div`
${FlexRow}
  justify-content: center;
  align-items: center;
  padding: 8px 12px 8px 12px;
  gap: 12px;
  border-radius: 48px;
  color: #ffffff14;
  border: 1px solid #ffffff14;
  background-color: #383942;

  @media (max-width: 361px) {
    width: 125px;
  }
`;

export const RateBoxPoint = styled.div`
${FlexRow}
  gap: 4px;
`;

export const RateBoxPointText = styled.div`
${PosRelative}
  width: 30px;
  color: #ff9901;
  &:before {
    content: "";
    ${PosAbsolute}
    width: 20px;
    border: 1px solid #ffffff14;
    transform: rotate(90deg);
    left: -6.5px;
    top: 10px;
  }
`;
