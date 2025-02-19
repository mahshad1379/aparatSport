import styled from "styled-components";
import { FlexRow } from "../../../../../config/globalStyle";

export const ButtonText = styled.div`
  background: none;
  font-family: YekanBakhMedium;
  font-size: 14px;
  line-height: 24px;
  text-align: right;
  color: #ffffff;

  @media (max-width: 361px) {
    font-size: 8px;
  }
`;

export const Button = styled.button`
  ${FlexRow}
  justify-content: center;
  align-items: center;
  background: none;
  width: 220px;
  height: 48px;
  padding: 12px 24px 12px 24px;
  gap: 8px;
  border-radius: 8px;
  border: 1px solid #78c248;

  @media (max-width: 361px) {
    width: 146px;
    height: 40px;
    padding: 10px 14px 10px 14px;
  }
`;

export const BazarText = styled.img`
  width: 30.5px;
  height: 20px;

  @media (max-width: 361px) {
    width: 24.4px;
    height: 16px;
  }
`;
