import React from "react";
import {
  SectionContainer,
  CardBoxContainer,
  CardContainer,
  CardTitle,
} from "./style";
import PostCard from "../../../../component/Post-card";
import { MainContainer } from "../../../../config/globalStyle";

const AheadPart = ({ data }) => {
  return (
    <MainContainer>
      <CardContainer>
        {data?.map((d) => (
          <MainContainer>
            <SectionContainer>
              <CardTitle>{d.title}</CardTitle>
              <CardBoxContainer>
                {d?.match_detail?.map((f) => (
                  <PostCard
                    title={f.title}
                    Img={f.thumb_website}
                    reporter={f.reporter_name}
                    time={f.start_time_hour_minute}
                  />
                ))}
              </CardBoxContainer>
            </SectionContainer>
          </MainContainer>
        ))}
      </CardContainer>
    </MainContainer>
  );
};

export default AheadPart;
