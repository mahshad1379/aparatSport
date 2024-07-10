import styled from "styled-components";

export const ButtonContainer = styled.div`
  display: ${(props) => (props.show ? "flex" : "none")};
  justify-content: center;
  gap: 12px;
  padding-top: 16px;
`;

export const ButtonText = styled.div`
  background: none;
  font: 500 14px 'yekanBakh';
  line-height: 24px;
  text-align: right;
  color: #ffffff;

  @media (max-width: 500px) {
    font-size: 12px;
  }
`;

export const Button = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: none;
  width: 262px;
  height: 48px;
  padding: 12px 24px 12px 24px;
  gap: 8px;
  border-radius: 8px;
  border: 1px solid #78c248;

  @media (max-width: 500px) {
    width: 146px;
    height: 40px;
    padding: 10px 14px 10px 14px;
  }
`;

export const BazarText = styled.img`
  width: 30.5px;
  height: 20px;

  @media (max-width: 500px) {
    width: 24.4px;
    height: 16px;
  }
`;
