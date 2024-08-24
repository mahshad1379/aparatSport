import styled from "styled-components";

export const MainImage = styled.img`
  position: absolute;
  top: 168px;
  left: 31px;

  @media (max-width: 361px) {
    width: 60%;
    height: 75%;
    top: 96px;
    left: 0px;
  }
`;

export const ButtonImage = styled.img`
  position: absolute;
  top: 402px;
  left: 52px;

  @media (max-width: 361px) {
    width: 55%;
    top: 270px;
    left: 70px;
  }
`;

export const TopImage = styled.img`
  position: absolute;
  top: 150px;
  left: 260px;

  @media (max-width: 361px) {
    width: 25%;
    top: 80px;
    left: 150px;
  }
`;
