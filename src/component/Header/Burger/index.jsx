import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import { BurgerStyle } from "./styles";

const Burger = ({isOpen,setIsOpen}) => {
  return (
    <BurgerStyle onClick={() => setIsOpen(!isOpen)}>
      {isOpen ? <ImCross color="white" /> : <GiHamburgerMenu color="white"/>}
    </BurgerStyle>
  );
};

export default Burger;
