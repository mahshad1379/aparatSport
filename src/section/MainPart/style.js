import styled from "styled-components";

export const MainPartStyle = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 100px;

  @media (max-width: 361px) {
    flex-direction: column;
    padding: 70px 10px 0;
  }
`;

export const Img = styled.img`
  width: 491px;
  height: 484px;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: 361px) {
    width: 312px;
    height: 306px;
    padding: 0;
  }
`;
