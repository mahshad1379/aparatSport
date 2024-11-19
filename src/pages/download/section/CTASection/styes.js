import styled from "styled-components";
import {
  FlexRow,
  FlexCol,
  PosRelative,
  PosAbsolute,
} from "../../config/globalStyle";

export const Container = styled.div`
  width: 100%;
  ${FlexCol}
  text-align: center;
  justify-content: center;
  margin-top: 70px;
`;

export const Image = styled.img`
  ${PosRelative}
`;

export const AparatSportLogo = styled.img`
  ${PosAbsolute}
  right: 700px;

  @media (max-width: 741px) {
    right: 330px;
    width: 10%;
  }

  @media (max-width: 361px) {
    right:160px;
  }
`;

export const ContentBox = styled.div`
  ${FlexCol}
  align-items: center;
  margin-top: 48px;
  gap: 8px;
  @media (max-width: 741px) {
    margin-top: 30px;
  }
`;

export const Header = styled.div`
  font: 800 28px "yekanBakh";
  line-height: 32px;
  text-align: center;
  color: #ffffff;

  @media (max-width: 361px) {
    font-size: 18px;
  }
`;

export const Text = styled.div`
  font: 500 14px "yekanBakh";
  line-height: 24px;
  text-align: center;
  color: #a4a6bc;

  @media (max-width: 361px) {
    font-size: 12px;
  }
`;

export const ButtonContainer = styled.div`
  ${FlexRow}
  margin-top: 48px;
  gap: 12px;
  width: 35%;

  @media (max-width: 741px) {
    ${FlexCol}
    align-items: center;
    width: 100%;
  }
`;

export const Button = styled.button`
  background-color: ${(props) => props.$backgroundColor};
  border: ${(props) => (props.green ? "#78C248" : "2px solid #78C248")};
  width: 50%;
  padding: 16px;
  margin: 0 8px;
  border-radius: 8px;
`;

export const ButtonContent = styled.div`
  ${FlexRow}
  text-align: center;
  justify-content: center;
`;

export const ButtonText = styled.div`
  color: ${(props) => (props.green ? "#000000" : "#78C248")};
  font: 800 16px "yekanBakh";
  line-height: 24px;
  text-align: left;
  padding-right: 8px;
`;
