import { styled } from "styled-components";

export const SliderContainer = styled.div`
  padding-top: 80px;

  @media (max-width: 741px) {
    padding-top: 50px;
  }
`;

export const ImgContainer = styled.img`
  border-radius: 16px;
  width: 100%;
`;

export const TimerBox = styled.div`
  position: absolute;
  z-index: 1;
  top: 16px;
  left: 16px;
  @media (max-width: 741px) {
    top: 216px;
  }
`;

export const SliderBox = styled.div`
  position: relative;
  z-index: 0;
`;

export const InfoBox = styled.div`
  position: absolute;
  z-index: 1;
  bottom: 0px;
  right: 0px;

  @media (max-width: 741px) {
    display: none;
  }
`;
