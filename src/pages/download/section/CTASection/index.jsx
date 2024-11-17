import React from "react";
import {
  Container,
  Image,
  AparatSportLogo,
  ContentBox,
  Header,
  Text,
  ButtonContainer,
  Button,
  ButtonContent,
  ButtonText,
} from "./styes.js";
import { MainContainer } from "../../config/globalStyle.js";
import Icon from "../../Icon/index.jsx";

const CTASection = () => {
  return (
    <MainContainer>
      <Container>
        <Image src="/assets/img/CTA-section/Sport Players (1).png" alt="CTA" />
        <AparatSportLogo
          src="/assets/img/CTA-section/App icon (1) 1.png"
          alt="aparat sport logo"
        />
        <ContentBox>
          <div>
            <Header>پخش زنده‌ی رایگان مسابقات ورزشی</Header>
            <Text>
              از لیگ برتر انگلیس و سری‌آ تا لیگ پرتغال و کشورهای عربی.
            </Text>
          </div>
          <ButtonContainer>
            <Button $backgroundColor="#78C248">
              <ButtonContent>
                <Icon
                  name={"download_icon"}
                  width="25px"
                  height="24px"
                  viewBox="0 0 25 24"
                  fill="none"
                />
                <ButtonText green={true}>دریافت اپلیکیشن</ButtonText>
              </ButtonContent>
            </Button>
            <Button $backgroundColor="#11121A">
              <ButtonContent>
                <Icon
                  name={"profile_icon"}
                  width="24px"
                  height="24px"
                  viewBox="0 0 24 24"
                  fill="none"
                />

                <ButtonText green={false}>ثبت نام</ButtonText>
              </ButtonContent>
            </Button>
          </ButtonContainer>
        </ContentBox>
      </Container>
    </MainContainer>
  );
};

export default CTASection;
