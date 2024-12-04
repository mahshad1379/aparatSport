import React from "react";
import { FavTeamBoxContainer, FavTeamContainer, FavTeamTitle } from "./style";
import FavTeamCard from "../../components/Fav-team-card";
import { MainContainer } from "../../../../config/globalStyle";

const FavTeam = ({ data }) => {
  return (
    <MainContainer>
      <FavTeamContainer>
        <FavTeamTitle>تیم های محبوب</FavTeamTitle>
        <FavTeamBoxContainer>
          {data?.top_team?.map((fav) => (
            <FavTeamCard title={fav.name} img={fav.image} />
          ))}
        </FavTeamBoxContainer>
      </FavTeamContainer>
    </MainContainer>
  );
};

export default FavTeam;
