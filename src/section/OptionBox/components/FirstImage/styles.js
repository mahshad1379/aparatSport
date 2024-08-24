import styled from "styled-components";

export const MainImage = styled.img`
  position: absolute;
  top: 168px;
  left: 112px;
  
  @media (max-width: 361px) {
    width: 60%;
    height: 75%;
    top: 96px;
    left: 128px;
  }
`;

export const ButtonImage = styled.img`
  position: absolute;
  top: 467px;
  left: 32px;

  @media (max-width: 361px) {
    width: 65%;
    top: 270px;
    left: 12px;
  }
`;

export const TopImage = styled.img`
  position: absolute;
  top: 282px;
  left: 52.31px;

  @media (max-width: 361px) {
    width: 36%;
    top: 120px;
    left: 12px;
  }
`;
