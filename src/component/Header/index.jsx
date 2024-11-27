import React, { useState } from "react";
import {
  HeaderStyle,
  LeftPart,
  Profile,
  ProfileText,
  HeaderContainer,
} from "./styles";
import Icon from "../../Icon/index";
import { MainContainer } from "../../config/globalStyle";
import RightNav from "./RightNav";
import Burger from "./Burger";

const Header = () => {
  const [color, setColor] = useState(false);

  const ChangeColor = () => {
    if (window.scrollY >= 42) {
      setColor(true);
    } else setColor(false);
  };

  window.addEventListener("scroll", ChangeColor);

  return (
    <HeaderStyle color={color}>
      <MainContainer>
        <HeaderContainer>
          <Icon
            name={"aparat_logo"}
            width="129px"
            height="32px"
            viewBox="0 0 129 32"
            fill="none"
          />
          <LeftPart>
            <RightNav />
            <Icon
              style={{ padding: "2.29px 2.29px 2.32px 2.29px" }}
              name={"search"}
              width="20px"
              height="20px"
              viewBox="0 0 20 20"
              fill="none"
            />
            <Profile>
              <ProfileText>پروفایل کاربری</ProfileText>
            </Profile>
          </LeftPart>
        </HeaderContainer>
      </MainContainer>
    </HeaderStyle>
  );
};

export default Header;
