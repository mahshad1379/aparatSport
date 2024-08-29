import styled from "styled-components";
import { PosAbsolute } from "../../../../config/globalStyle";

export const MainImage = styled.img`
  ${PosAbsolute}
  top: 152px;
  left: 40px;

  @media (max-width: 361px) {
    width: 70%;
    height: 75%;
    top: 96px;
  }
`;

export const ButtonImage = styled.img`
  ${PosAbsolute}
  top: 494px;
  left: 134px;

  @media (max-width: 361px) {
    top: 280px;
    left: auto;
    width: 40%;
  }
`;

export const TopImage = styled.img`
  ${PosAbsolute}
  top: 193.08px;
  left: 17px;
  
  @media (max-width: 361px) {
    top: 164.09px;
    left: 12px;
    width: 25%;
  }
`;
