import React from "react";
import { ButtonText, Button } from "../styles.js";
import Icon from "../../../../Icon/index.jsx";

const AndroidButton = () => {
  return (
    <Button>
      <Icon
        name={"android"}
        width="21px"
        height="20px"
        viewBox="0 0 21 20"
        fill="none"
      />
      <ButtonText>دریافت مستقیم</ButtonText>
    </Button>
  );
};

export default AndroidButton;
