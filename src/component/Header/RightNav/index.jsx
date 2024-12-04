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
            <MenuFrame3Text>
              <Icon
                name={"green_circle"}
                width="16px"
                height="16px"
                viewBox="0 0 16 16"
                fill="none"
              />
              {/* <Link className="menuItem_link" to={`/LivePage/${data.match_id}`}>
                پخش زنده
              </Link> */}
            </MenuFrame3Text>
          </MenuFrame3>
          <MenuItem>
            <Link className="menuItem_link" to="/">
              برنامه پخش
            </Link>
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
