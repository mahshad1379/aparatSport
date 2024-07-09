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

const CTASection = () => {
  return (
    <Container>
      <Image src="/assets/img/CTA-section/Sport Players (1).png" alt="CTA" />
      <AparatSportLogo
        src="/assets/img/CTA-section/App icon (1) 1.png"
        alt="aparat sport logo"
      />
      <ContentBox>
        <div>
          <Header>پخش زنده‌ی رایگان مسابقات ورزشی</Header>
          <Text>از لیگ برتر انگلیس و سری‌آ تا لیگ پرتغال و کشورهای عربی.</Text>
        </div>
        <ButtonContainer>
          <Button $backgroundColor="#78C248">
            <ButtonContent>
              <svg
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M2.5 12C2.5 7.28595 2.5 4.92893 3.96447 3.46447C5.42893 2 7.78595 2 12.5 2C17.214 2 19.5711 2 21.0355 3.46447C22.5 4.92893 22.5 7.28595 22.5 12C22.5 16.714 22.5 19.0711 21.0355 20.5355C19.5711 22 17.214 22 12.5 22C7.78595 22 5.42893 22 3.96447 20.5355C2.5 19.0711 2.5 16.714 2.5 12ZM12.5 6.25C12.9142 6.25 13.25 6.58579 13.25 7V12.1893L14.9697 10.4697C15.2626 10.1768 15.7374 10.1768 16.0303 10.4697C16.3232 10.7626 16.3232 11.2374 16.0303 11.5303L13.0303 14.5303C12.8897 14.671 12.6989 14.75 12.5 14.75C12.3011 14.75 12.1103 14.671 11.9697 14.5303L8.96967 11.5303C8.67678 11.2374 8.67678 10.7626 8.96967 10.4697C9.26256 10.1768 9.73744 10.1768 10.0303 10.4697L11.75 12.1893V7C11.75 6.58579 12.0858 6.25 12.5 6.25ZM8.5 16.25C8.08579 16.25 7.75 16.5858 7.75 17C7.75 17.4142 8.08579 17.75 8.5 17.75H16.5C16.9142 17.75 17.25 17.4142 17.25 17C17.25 16.5858 16.9142 16.25 16.5 16.25H8.5Z"
                  fill="black"
                />
              </svg>
              <ButtonText green={true}>دریافت اپلیکیشن</ButtonText>
            </ButtonContent>
          </Button>
          <Button $backgroundColor="#11121A">
            <ButtonContent>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM15 9C15 10.6569 13.6569 12 12 12C10.3431 12 9 10.6569 9 9C9 7.34315 10.3431 6 12 6C13.6569 6 15 7.34315 15 9ZM12 20.5C13.784 20.5 15.4397 19.9504 16.8069 19.0112C17.4108 18.5964 17.6688 17.8062 17.3178 17.1632C16.59 15.8303 15.0902 15 11.9999 15C8.90969 15 7.40997 15.8302 6.68214 17.1632C6.33105 17.8062 6.5891 18.5963 7.19296 19.0111C8.56018 19.9503 10.2159 20.5 12 20.5Z"
                  fill="#78C248"
                />
              </svg>

              <ButtonText green={false}>ثبت نام</ButtonText>
            </ButtonContent>
          </Button>
        </ButtonContainer>
      </ContentBox>
    </Container>
  );
};

export default CTASection;
