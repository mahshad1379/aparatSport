import React from "react";
import { TeamContainer, TeamLogo, TeamName } from "./stayle";

const FavTeamCard = ({ img, title }) => {
  return (
    <TeamContainer>
      <TeamLogo src={img} />
      <TeamName>{title}</TeamName>
    </TeamContainer>
  );
};

export default FavTeamCard;
