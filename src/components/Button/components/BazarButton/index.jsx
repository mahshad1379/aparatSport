import React from "react";
import { ButtonText, Button, BazarText } from "../styles.js";

const BazarButton = () => {
  return (
      <Button>
        <img
          className="bazarLogo"
          src="/img/main-page/Cafe_Bazaar_logo 2.png"
          alt="bazar"
        />
        <ButtonText>دریافت از </ButtonText>
        <BazarText src="/img/main-page/Cafe_Bazaar_logo1 2.png" alt="bazar" />
      </Button>
  );
};

export default BazarButton;
