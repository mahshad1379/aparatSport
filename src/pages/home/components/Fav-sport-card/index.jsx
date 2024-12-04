import React from "react";
import { SportContainer, SportImage, SportName } from "./style";

const FavSportTeam = ({ img, title }) => {
  return (
    <SportContainer>
      <SportImage src={img} />
      <SportName>{title}</SportName>
    </SportContainer>
  );
};

export default FavSportTeam;
