import React, { useEffect } from "react";
import { Style } from "./style";
import { useQuery } from "@tanstack/react-query";
import { getLiveData, getTodayMatchData } from "../../service/Live.js";
import TopPart from "./section/TopPart/index.jsx";
import LivePlay from "./section/LivePlay/index.jsx";
import AheadPart from "./section/AheadPart/index.jsx";
import { useParams } from "react-router-dom";
import useDeviceType from "../../hooks/useDeviceType.jsx";

const Live = () => {
  const deviceType = useDeviceType();
  const { uuid } = useParams();

  const { data: liveData, refetch, isLoading: isLoadingLive } = useQuery({
    queryKey: ["live_test"],
    queryFn: () => getLiveData({ deviceType, uuid }),
  });

  const { data: todayMatch, refetch: todayMatchRefetch , isLoading: isLoadingTodayMatch } = useQuery({
    queryKey: ["today_match_test"],
    queryFn: () => getTodayMatchData({ deviceType, uuid }),
  });

  useEffect(() => {
    if (deviceType && uuid) {
      refetch();
      todayMatchRefetch();
    }
  }, [deviceType, uuid, refetch, todayMatchRefetch]);

  if (isLoadingLive || isLoadingTodayMatch) {
    return <div>Loading...</div>;
  }

  if (!liveData || !todayMatch) {
    return <div>No data available.</div>;
  }

  return (
    <Style>
      <LivePlay data={liveData} />
      <TopPart data={liveData} />
      <AheadPart data={todayMatch} />
    </Style>
  );
};

export default Live;