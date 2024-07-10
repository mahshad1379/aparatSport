import styled from "styled-components";

export const RateBoxStyle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 12px 8px 12px;
  gap: 12px;
  border-radius: 48px;
  color: #ffffff14;
  border: 1px solid #ffffff14;
  background-color: #383942;

  @media (max-width: 360px) {
    width: 125px;
  }
`;

export const RateBoxLogo = styled.img`
  width: 50.63px;
  height: 20px;
`;

export const RateBoxPoint = styled.div`
  display: flex;
  flex-direction: row;
  width: 47px;
  height: 16px;
  gap: 4px;
`;

export const RateBoxPointText = styled.div`
  position: relative;
  width: 47px;
  height: 16px;
  margin-top: -3px;
  color: #ff9901;
  &:before {
    content: "";
    position: absolute;
    width: 20px;
    border: 1px solid #ffffff14;
    transform: rotate(90deg);
    left: -6.5px;
    top: 10px;
  }
`;
