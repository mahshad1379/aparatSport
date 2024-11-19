import styled from "styled-components";
import {
  FlexRow,
  FlexCol,
  DisplayFlex,
  PosRelative,
  PosAbsolute,
} from "../../../../config/globalStyle";

export const TvPart = styled.div`
  margin-top: 40px;
  ${PosRelative}
  height: 614px;

  @media (max-width: 741px) {
    ${FlexCol}
    margin: 0 0 50px 0;
  }
`;

export const TvPartBackground = styled.div`
  background-image: url("./assets/img/tv-part/TV-BG.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  @media (max-width: 741px) {
    background-image: unset;
  }
`;

export const LeftPart = styled.div`
  width: 100%;
  height: 100%;
  ${PosAbsolute}

  @media (max-width: 361px) {
    height: 50%;
    top: -30px;
  }
`;

export const ImgContainer = styled.div`
  display: none;

  @media (max-width: 741px) {
    ${DisplayFlex}
    height: 100%;
    ${PosRelative}
    overflow: hidden;
  }
`;

export const Img = styled.img`
  ${PosAbsolute}
  height: 100%;
  width: 100%;

  @media (max-width: 741px) {
    transform: scale(1.8);
    left: 270px;
    top: 55px;
    height: 40%;
  }
  @media (max-width: 361px) {
    transform: scale(1.72);
    left: 125px;
    height: 70%;
  }
`;

export const GreenButton = styled.button`
  ${DisplayFlex}
  width: 67%;
  padding: 16px;
  border-radius: 8px;
  background: #78c248;
  justify-content: center;
  align-items: center;

  @media (max-width: 1281px) {
    width: 70%;
    align-items: start;
  }
    @media (max-width: 741px) {
    width: 67%;
  }
  @media (max-width: 361px) {
    width: 42%;
  }
`;

export const GreenButtonText = styled.div`
  font: 800 16px "yekanBakh";
  line-height: 24px;
  text-align: left;
  color: #000000;
  text-align: center;
`;

export const RightPart = styled.div`
  ${DisplayFlex}
  ${PosAbsolute}
  justify-content: center;
  align-item: center;
  width: 50%;
  height: 100%;
  padding: 96px 0px 0px 0px;
  gap: 96px;
  z-index: 1;

  @media (max-width: 741px) {
    padding: 0;
    ${PosRelative}
    top: 400px;
    width: 100%;
    padding: 20px 0px 30px;
    text-align: center;
  }

  @media (max-width: 361px) {
    ${PosRelative}
    top: 270px;
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
  font: 800 28px "yekanBakh";
  line-height: 32px;
  text-align: right;
  color: #ffffff;

  @media (max-width: 361px) {
    font-size: 18px;
    text-align: center;
  }
`;

export const UpsideContentText = styled.div`
  font: 500 14px "yekanBakh";
  line-height: 24px;
  text-align: right;
  color: #a4a6bc;

  @media (max-width: 361px) {
    font-size: 12px;
    text-align: center;
  }
`;

export const DownSideContent = styled.div`
  ${FlexCol}
  align-items: center;
  gap: 10px;
`;

export const OptionDownloadBox = styled.div`
  ${FlexRow}
  gap: 8px;
  @media (max-width: 361px) {
    ${FlexCol}
    gap: 10px;
  }
`;
