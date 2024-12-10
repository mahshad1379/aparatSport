import React, { useState } from "react";
import { Link } from "react-router-dom";

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
                <a className="MenuFrame3Text" href="/#live">
                  پخش زنده
                </a>
              </MenuFrame3Text>
            )}
          </MenuFrame3>
          <MenuItem>
            <a className="menuItem_link" href="/#match">
              برنامه پخش
            </a>
          </MenuItem>
          <MenuItem>
            <Link className="menuItem_link" to="/Download">
              دانلود اپلیکیشن
            </Link>
          </MenuItem>
        </BurgerMenu>
      </HeaderMenu>
    </RightNavStyle>
  );
};

export default RightNav;
