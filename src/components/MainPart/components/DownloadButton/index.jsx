import React from "react";
import {ButtonContainer} from "./styles.js";
import AndroidButton from "../../../Button/components/AndroidButton/index.jsx";
import BazarButton from "../../../Button/components/BazarButton/index.jsx";

const DownloadButton = ({ show }) => {
  return (
    <ButtonContainer show={show}>
      <AndroidButton/>
      <BazarButton/>
    </ButtonContainer>
  );
};

export default DownloadButton;
