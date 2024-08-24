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
import AndroidButton from "../../components/Button/components/AndroidButton/index.jsx";
import BazarButton from "../../components/Button/components/BazarButton/index.jsx";
import { MainContainer } from "../../config/globalStyle.js";

const TVPart = () => {
  return (
    <TvPart>
      <MainContainer>
      <LeftPart>
        <ImgContainer>
          <Img src="/assets/img/tv-part/TV-BG.png" alt="" />
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
      </MainContainer>
    </TvPart>
  );
};

export default TVPart;
