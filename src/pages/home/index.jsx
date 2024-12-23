import React, { useEffect, useState } from "react";
import FavSport from "./section/Fav-sport/index.jsx";
import FavTeam from "./section/Fav-team/index.jsx";
import Playlist from "./section/Playlist/Playlist-cards-box/index.jsx";
import TodayPlaylist from "./section/Today-playlist/index.jsx";
import { Style } from "./style";
import { useQuery } from "@tanstack/react-query";
import { getHomeData, getNextDaysData } from "../../service/Home.js";
import SliderPart from "./section/Slider/index.jsx";
import useDeviceType from "../../hooks/useDeviceType.jsx";

const Home = () => {
  const [clickDate, setClickDate] = useState(0);
  const deviceType = useDeviceType();

  const { data, refetch, isLoading } = useQuery({
    
    queryKey: ["match_test"],
    queryFn: () => getHomeData({ deviceType }),
  });

  const { data: nextDay, refetch: nextDayRefetch, isLoading:isLoadingNextDay } = useQuery({
    queryKey: [`date_${clickDate}`],
    queryFn: () => getNextDaysData({ i: clickDate, deviceType }),
  });

  useEffect(() => {
    if (deviceType) {
      refetch();
      nextDayRefetch();
    }
  },[deviceType])

  if (isLoading && isLoadingNextDay) {
    return <div>Loading...</div>
  }

  return (
    <Style>
      <SliderPart data={data} />
      <TodayPlaylist data={data}/>
      <FavTeam data={data} />
      <Playlist data={nextDay} setClickDate={setClickDate} />
      <FavSport data={data} />
    </Style>
  );
};

export default Home;
