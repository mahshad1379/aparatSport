import React, { useState } from "react";
import FavSport from "../section/Fav-sport/index.jsx";
import FavTeam from "../section/Fav-team/index.jsx";
import Playlist from "../section/Playlist/Playlist-cards-box/index.jsx";
import TodayPlaylist from "../section/Today-playlist/index.jsx";
import { Style } from "./stayle";
import { useQuery } from "@tanstack/react-query";
import { getHomeData, getNextDaysData } from "../../../sevice/Home.js";
import SliderPart from "../section/Slider/index.jsx";

const HomePage = () => {
  const [clickDate, setClickDate] = useState(0);

  const { data } = useQuery({
    queryKey: ["match_test"],
    queryFn: getHomeData,
  });

  const { data: nextDay, refetch: nextDayRefetch } = useQuery({
    queryKey: [`date_${clickDate}`],
    queryFn: () => getNextDaysData(clickDate),
  });

  return (
    <Style>
      <SliderPart data={data}/>
      <TodayPlaylist data={data} />
      <FavTeam data={data} />
      <Playlist data={nextDay} setClickDate={setClickDate} />
      <FavSport data={data} />
    </Style>
  );
};

export default HomePage;
