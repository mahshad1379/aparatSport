import React from "react";
import {
  SectionContainer,
  CardBoxContainer,
  CardContainer,
  CardTitle,
} from "./style";
import PostCard from "../../../../component/Post-card";
import { MainContainer } from "../../../../config/globalStyle";

const TodayPlaylist = ({ data }) => {
  return (
    <CardContainer>
      {data?.match?.map((d) => (
        <MainContainer>
          <SectionContainer>
            <CardTitle>{d.title}</CardTitle>
            <CardBoxContainer>
              {d?.match_detail?.map((f) => (
                
               <>
               {console.log("idf:",f.id)}
                <PostCard
                // id
                  key={f.id}
                  id={f?.id}
                  title={f.title}
                  Img={f.thumb_website}
                  reporter={f.reporter_name}
                  time={f.start_time_hour_minute}
                />
               </>
              ))}
            </CardBoxContainer>
          </SectionContainer>
        </MainContainer>
      ))}
    </CardContainer>
  );
};

export default TodayPlaylist;
