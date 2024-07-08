import styled from "styled-components";

export const OptionBoxStyle = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 404px;
  height: 614px;
  border-radius: 16px;
  background: #0a0b10;
  border: 1px solid;
  overflow: hidden;

  @media (max-width: 500px) {
    width: 300px;
    margin-bottom: 16px;
    flex-shrink: 0;
    height: 440px;
  }
`;

export const OptionBoxContent = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  top: 56px;

  @media (max-width: 500px) {
    width: 163px;
    height: 48px;
    top: 24px;
    left: 69px;
    gap: 8px;
  }
`;

export const OptionBoxHeader = styled.h3`
  font-family: YekanBakhheavy;
  font-size: 20px;
  // font-weight: 600;
  line-height: 24px;
  color: #ffffff;
  text-align: center;
  margin: 0;

  @media (max-width: 500px) {
    font-size: 16px;
  }
`;

export const OptionBoxText = styled.div`
  font-family: YekanBakhMedium;
  font-size: 14px;
  // font-weight: 325;
  line-height: 24px;
  color: #a4a6bc;
  text-align: center;

  @media (max-width: 500px) {
    font-size: 11px;
  }
`;

export const OptionPartStyle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 40px 0;
  gap: 16px;
  @media (max-width: 500px) {
    justify-content: start;
    flex-wrap: nowrap;
    overflow: scroll hidden;
  }
`;
