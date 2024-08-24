import React, { useState } from "react";
import { MainContainer } from "../../config/globalStyle";
import {
  HeaderStyle,
  LeftPart,
  Menu,
  MenuItem,
  MenuFrame3,
  MenuFrame3Text,
  Profile,
  ProfileText,
  HeaderContainer,
} from "./styles";
import Icon from "../../Icon";

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
              width="129"
              height="32"
              viewBox="0 0 129 32"
              fill="none"
            />
          <LeftPart>
            <Menu>
              <MenuItem>دانلود اپلیکیشن</MenuItem>
              <MenuFrame3>
                <Icon
                  name={"green_circle"}
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                />
                <MenuFrame3Text>پخش زنده</MenuFrame3Text>
              </MenuFrame3>
              <MenuItem>برنامه پخش</MenuItem>
              <MenuItem>ویدیوها</MenuItem>
                <Icon
                style={{padding: "2.29px 2.29px 2.32px 2.29px"}}
                  name={"search"}
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                />
            </Menu>
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
