import styled from "styled-components";

export const MainContainer = styled.div`
  width: 100%;
  max-width: 1360px;
  margin: 0 auto;
  padding-top: 100px;
  box-sizing: border-box;

  @media (max-width: 360px) {
    padding-top: 60px;
  }
`;

export const MainPartStyle = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: 360px) {
    flex-direction: column;
  }
`;

export const Img = styled.img`
  width: 491px;
  height: 484px;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: 360px) {
    width: 312px;
    height: 306px;
    padding: 0;
  }
`;
