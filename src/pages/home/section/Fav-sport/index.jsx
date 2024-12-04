import React from "react";
import {
  FavSportBoxContainer,
  FavSportContainer,
  FavSportTitle,
} from "./style";
import FavSportTeam from "../../components/Fav-sport-card";
import { MainContainer } from "../../../../config/globalStyle";

const FavSport = ({ data }) => {
  return (
    <MainContainer>
      <FavSportContainer>
        <FavSportTitle>ورزش های محبوب</FavSportTitle>
        <FavSportBoxContainer>
          {data?.top_game?.map((f) => (
            <FavSportTeam img={f.image} title={f.name} />
          ))}
        </FavSportBoxContainer>
      </FavSportContainer>
    </MainContainer>
  );
};

export default FavSport;
