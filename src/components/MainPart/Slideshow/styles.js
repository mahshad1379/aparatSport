import styled, { keyframes } from "styled-components";

const slide = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;

export const SlideshowStyle = styled.div`
  overflow: hidden;
  padding: 30px 0;
  display: flex;
  flex-direction: row;
  // white-space: nowrap;
`;

export const LogoBox = styled(SlideshowStyle)`
  display: flex;
  flex-direction: row;
  gap: 60px;
  animation: ${slide} 7s linear 0s infinite;
`;

export const SlideshowItemstyle = styled.img`
  height: 80px;
  width: 100%;
`;
