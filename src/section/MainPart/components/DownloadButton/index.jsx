import React from "react";
import {ButtonContainer} from "./styles.js";
import AndroidButton from "../../../../components/Button/components/AndroidButton/index.jsx";
import BazarButton from "../../../../components/Button/components/BazarButton";

const DownloadButton = () => {
  return (
    <ButtonContainer>
      <AndroidButton/>
      <BazarButton/>
    </ButtonContainer>
  );
};

export default DownloadButton;
