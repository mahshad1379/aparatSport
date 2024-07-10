import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
`;

export const Image = styled.img`
  position: relative;
`;

export const AparatSportLogo = styled.img`
  position: absolute;
  right: 700px;
`;

export const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 48px;
  gap: 8px;
`;

export const Header = styled.div`
  font: 800 28px 'yekanBakh';
  line-height: 32px;
  text-align: center;
  color: #ffffff;

  @media (max-width: 500px) {
    font-size: 18px;
  }
`;

export const Text = styled.div`
  font: 500 14px 'yekanBakh';
  line-height: 24px;
  text-align: center;
  color: #a4a6bc;

  @media (max-width: 500px) {
    font-size: 12px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 48px;
  gap: 12px;

  @media (max-width: 500px) {
    flex-direction: column;
  }
`;

export const Button = styled.button`
  background-color: ${(props) => props.$backgroundColor};
  border: ${(props) => (props.green ? "#78C248" : "2px solid #78C248")};
  width: 240px;
  height: 56px;
  padding: 16px;
  margin: 0 8px;
  border-radius: 8px;
`;

export const ButtonContent = styled.div`
  display: flex;
  flex-direction: row;
  text-align: center;
  justify-content: center;
`;

export const ButtonText = styled.div`
  color: ${(props) => (props.green ? "#000000" : "#78C248")};
  font: 800 16px 'yekanBakh';
  line-height: 24px;
  text-align: left;
  padding-right: 8px;
`;
