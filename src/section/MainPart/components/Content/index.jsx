import React, { useState } from "react";
import DownloadBox from "../DownloadBox";
import DOWNLOAD_ITEM from "../../../../constant/downloadItem";
import {
  Container,
  ContentContainer,
  ContentStyle,
  ContentHeader,
  ContentText,
  Info,
  DownloadBoxStyle,
} from "./styles.js";

import {
  DownloadBoxItem,
  DownloadBoxContent,
  DownloadBoxTitle,
  DownloadBoxTitleLogo,
  DownloadBoxTitleText,
} from "../DownloadBox/styes.js";
import Icon from "../../../../Icon/index.jsx";

const Content = () => {
  const [openKey, setOpenKey] = useState(0);

  const handleOpenAccordion = (index) => {
    setOpenKey(openKey === index ? null : index);
  };

  return (
    <Container>
      <ContentContainer>
        <ContentStyle>
          <ContentHeader>رایگان تماشا کنید</ContentHeader>
          <ContentText>
            دریافت اپلیکیشن آپارات اسپرت و تماشای رایگان مسابقات ورزشی
          </ContentText>
        </ContentStyle>
        <Info>
          از فوتبال، والیبال و بسکتبال گرفته تا فرمول یک، کشتی، اسنوکر و شنا
          رایگان در آپارات اسپرت.
        </Info>
      </ContentContainer>
      <DownloadBoxStyle>
        {DOWNLOAD_ITEM.map((item, index) => (
          <>
            <DownloadBox
              item={item}
              index={index}
              handleOpenAccordion={handleOpenAccordion}
              openKey={openKey}
            />
          </>
        ))}
        <DownloadBoxItem>
          <DownloadBoxContent>
            <DownloadBoxTitle>
              <DownloadBoxTitleLogo>
                <Icon
                  name={"title_logo"}
                  width="20px"
                  height="20px"
                  viewBox="0 0 20 20"
                  fill="none"
                />
              </DownloadBoxTitleLogo>
              <DownloadBoxTitleText>اسکن QR کد</DownloadBoxTitleText>
            </DownloadBoxTitle>
            <Icon
              style={{ padding: " 8.25px 4.25px 8.25px 4.25px" }}
              name={"link_icon"}
              width="22px"
              height="22px"
              viewBox="0 0 22 22"
              fill="none"
            />
          </DownloadBoxContent>
        </DownloadBoxItem>
      </DownloadBoxStyle>
    </Container>
  );
};

export default Content;
