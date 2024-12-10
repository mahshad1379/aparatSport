import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

import {
  RightNavStyle,
  HeaderMenu,
  BurgerMenu,
  MenuItem,
  MenuFrame3,
  MenuFrame3Text,
} from "./styles";
import Icon from "../../../Icon";
import Burger from "../Burger";

const RightNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <RightNavStyle>
      <Burger isOpen={isOpen} setIsOpen={setIsOpen} />
      <HeaderMenu open={isOpen}>
        <BurgerMenu>
          <MenuFrame3>
              {document.getElementById("live") && (
                <MenuFrame3Text>
                <Icon
                name={"green_circle"}
                width="16px"
                height="16px"
                viewBox="0 0 16 16"
                fill="none"
              />
                <HashLink className="menuItem_link" smooth to="/#live">
                  پخش زنده
                </HashLink>
                </MenuFrame3Text>
              )}
          </MenuFrame3>
          <MenuItem>
            <HashLink className="menuItem_link" smooth to="/#match">
              برنامه پخش
            </HashLink>
          </MenuItem>
          <MenuItem>
            {" "}
            <Link className="menuItem_link" to="/DownloadPage">
              دانلود اپلیکیشن
            </Link>
          </MenuItem>
        </BurgerMenu>
      </HeaderMenu>
    </RightNavStyle>
  );
};

export default RightNav;
