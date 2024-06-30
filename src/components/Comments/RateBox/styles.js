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

  @media (max-width: 500px) {
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
  width: 47px;
  height: 16px;
  gap: 4px;
  margin-top: -3px;
  color: #ff9901;
`;

export const RateBoxLine = styled.span`
  width: 20px;
  height: 0px;
  border: 1px solid #ffffff14;
  transform: rotate(90deg);
`;

export const RateBoxStarContainer = styled.div`
  position: relative;
  padding: 1.33px;
  border-radius: 5px;
`;

export const RateBoxStar = styled.svg`
  position: absolute;
  top: 1.33px;
  left: 1.33px;
`;
