import React from "react";
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
  OptionDownloadBox,
  UpsideContentHeader,
  UpsideContentText,
} from "./styles.js";
import AndroidButton from "../Button/components/AndroidButton";
import BazarButton from "../Button/components/BazarButton";

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
            <OptionDownloadBox>
              <AndroidButton/>
              <BazarButton/>
            </OptionDownloadBox>
          </DownSideContent>
        </Content>
      </RightPart>
    </TvPart>
  );
};

export default TVPart;
