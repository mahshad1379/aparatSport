import styled from "styled-components";

export const MainPartStyle = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  padding: 100px 96px 0px 96px;
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
  padding: 100px 96px 0px 96px;
  justify-content: space-between;

  @media (max-width: 360px) {
    width: 312px;
    height: 306px;
    padding: 0;
  }
`;
