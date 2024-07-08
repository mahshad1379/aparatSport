import React from "react";
import DownloadButton from "../MainPart/components/DownloadButton";
import {
  LeftPart,
  Img,
  ImgContainer,
  GreenButtonText,
  GreenButton,
  TvPart,
  RightPart,
  Content,
  UpsideContent,
  DownSideContent,
  UpsideContentHeader,
  UpsideContentText,
} from "./styles.js";

const TVPart = () => {
  return (
    <TvPart>
      <LeftPart>
        <ImgContainer>
          <Img src="/img/tv-part/TV-BG.png" alt="" />
        </ImgContainer>
      </LeftPart>
      <RightPart>
        <Content>
          <UpsideContent>
            <UpsideContentHeader>
              تماشای آپارات اسپرت با تلویزیون
            </UpsideContentHeader>
            <UpsideContentText>
              اگر تلویزیون تو سیستم عامل اندروید دارد، می‌توانی برنامه آپارات
              اسپرت برای تلویزیون را از بازار و مایکت، یا به صورت مستقیم دانلود
              کنید.
            </UpsideContentText>
          </UpsideContent>
          <DownSideContent>
            <GreenButton>
              <GreenButtonText>دریافت مستقیم</GreenButtonText>
            </GreenButton>
            <DownloadButton show={true} />
          </DownSideContent>
        </Content>
      </RightPart>
    </TvPart>
  );
};

export default TVPart;
