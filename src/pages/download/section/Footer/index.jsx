import React from "react";
import {
  Container,
  FooterContainer,
  RightPart,
  LeftPart,
  Content,
  Item,
  LiveBrodcast,
} from "./styles.js";
import { MainContainer } from "../../config/globalStyle.js";
import Icon from "../../Icon/index.jsx";

const Footer = () => {
  return (
    <Container>
      <MainContainer>
        <FooterContainer>
          <RightPart>
            <Icon
              name={"aparat_sport"}
              width="88px"
              height="20px"
              viewBox="0 0 88 20"
              fill="none"
            />
            <Content>
              <LiveBrodcast>
                <Icon
                  name={"live_brodcast"}
                  width="17px"
                  height="16px"
                  viewBox="0 0 17 16"
                  fill="none"
                />
                <Item green={true}>پخش زنده</Item>
              </LiveBrodcast>
              <Item>لیست پخش</Item>
              <Item>ویدیوها</Item>
              <Item>دسته‌بندی‌ها</Item>
            </Content>
          </RightPart>
          <LeftPart>
            <Icon
              name={"linkdin"}
              width="32px"
              height="32px"
              viewBox="0 0 32 32"
              fill="none"
            />
            <Icon
              name={"instagram"}
              width="32px"
              height="32px"
              viewBox="0 0 32 32"
              fill="none"
            />
            <Icon
              name={"twitter"}
              width="32px"
              height="32px"
              viewBox="0 0 32 32"
              fill="none"
            />
          </LeftPart>
        </FooterContainer>
      </MainContainer>
    </Container>
  );
};

export default Footer;
