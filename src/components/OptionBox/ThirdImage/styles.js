import styled from "styled-components";

export const MainImage = styled.img`
  position: absolute;
  top: 168px;
  left: 31px;

  @media (max-width: 500px) {
    width: 214px;
    height: 370px;
    top: 96px;
    left: 0px;
  }
`;

export const ButtonImage = styled.img`
  position: absolute;
  top: 402px;
  left: 52px;

  @media (max-width: 500px) {
    width: 200px;
    height: 96px;
    top: 332px;
  }
`;

export const TopImage = styled.img`
  position: absolute;
  top: 150px;
  left: 260px;

  @media (max-width: 500px) {
    top: 80px;
    left: 190px;
  }
`;
