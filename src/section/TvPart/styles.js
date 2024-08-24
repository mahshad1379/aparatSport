import styled from "styled-components";

export const LeftPart = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;

  @media (max-width: 361px) {
    height: 50%;
    top: -30px;
  }
`;

export const ImgContainer = styled.div`
  height: 100%;
  position: relative;
  display: flex;
  overflow: hidden;

  @media (max-width: 361px) {
  }
`;

export const Img = styled.img`
  position: absolute;
  height: 100%;
  width: 100%;

  @media (max-width: 361px) {
    transform: scale(1.72);
    left: 125px;
    top: 55px;
    height: 70%;
  }
`;

export const GreenButton = styled.button`
  width: 67%;
  padding: 16px;
  border-radius: 8px;
  background: #78c248;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 361px) {
    width: 42%;
  }
`;

export const GreenButtonText = styled.div`
  font: 800 16px 'yekanBakh';
  line-height: 24px;
  text-align: left;
  color: #000000;
  text-align: center;
`;

export const TvPart = styled.div`
  margin-top: 40px;
  position: relative;
  height: 614px;

  @media (max-width: 361px) {
    flex-direction: column;
  }
`;

export const RightPart = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-item: center;
  width: 50%;
  height: 100%;
  padding: 96px 0px 0px 0px;
  gap: 96px;
  z-index: 1;

  @media (max-width: 361px) {
    padding: 0;
    position: relative;
    top: 270px;
    width: 100%;
    padding: 20px 0px 30px;
    text-align: center;
  }
`;
export const Content = styled.div``;

export const UpsideContent = styled.div`
  padding-bottom: 70px;
  width: 90%;
  @media (max-width: 361px) {
    width: 100%;
  }
`;

export const UpsideContentHeader = styled.h2`
  font: 800 28px 'yekanBakh';
  line-height: 32px;
  text-align: right;
  color: #ffffff;

  @media (max-width: 361px) {
    font-size: 18px;
    text-align: center;
  }
`;

export const UpsideContentText = styled.div`
  font: 500 14px 'yekanBakh';
  line-height: 24px;
  text-align: right;
  color: #a4a6bc;

  @media (max-width: 361px) {
    font-size: 12px;
    text-align: center;
  }
`;

export const DownSideContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const OptionDownloadBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  @media (max-width: 361px) {
    flex-direction: column;
    gap: 10px;
  }
`;
