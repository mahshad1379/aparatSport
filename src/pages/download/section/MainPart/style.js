import styled from "styled-components";
import { FlexRow, FlexCol } from "../../../../config/globalStyle";

export const MainPartStyle = styled.div`
${FlexRow}
  align-items: center;
  justify-content: space-between;
  padding-top: 100px;

  @media (max-width: 741px) {
    ${FlexCol}
    padding: 70px 10px 0;
  }
`;

export const Img = styled.img`
  ${FlexRow}
  align-items: center;
  justify-content: space-between;

  @media (max-width: 361px) {
    height: 306px;
    padding: 0;
  }
`;
