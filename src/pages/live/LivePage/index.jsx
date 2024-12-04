import React from "react";
import { Style } from "./style";
import { useQuery } from "@tanstack/react-query";
import { getLiveData, getTodayMatchData } from "../../../service/Live.js";
import useResponsiveForm from "../../../service/Responsive.jsx";
import TopPart from "../section/TopPart/index.jsx";
import LivePlay from "../section/LivePlay/index.jsx";
import AheadPart from "../section/AheadPart/index.jsx";
import { useParams } from "react-router-dom";

const LivePage = () => {
  const deviceType = useResponsiveForm();
  const { id } = useParams();
  
  console.log("id in params", id)
  
  const { data: liveData } = useQuery({
    queryKey: ["live_test"],
    queryFn: () => getLiveData({deviceType , id}),

  });
  
  const { data: todayMatch } = useQuery({
    queryKey: [`today_match_test`],
    queryFn: () => getTodayMatchData({deviceType , id}),
  });

  return (
    <Style>
      {console.log("data in todayMatch",todayMatch )
      }
      {/* <LivePlay data = {liveData}/>
      <TopPart data = {liveData}/> */}
      <AheadPart data={todayMatch} />
    </Style>
  );
};

export default LivePage;
