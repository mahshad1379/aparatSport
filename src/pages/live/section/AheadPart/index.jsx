import React, { useState } from "react";
import {
  SectionContainer,
  CardBoxContainer,
  CardContainer,
  CardTitle,
  ShoMoreButton,
} from "./style";
import PostCard from "../../../../component/Post-card";
import { MainContainer } from "../../../../config/globalStyle";

const AheadPart = ({ data }) => {
  const [showMore , setShowMore] = useState(false)
  return (
    <MainContainer>
      <CardContainer>
        {data?.map((d) => (
          <MainContainer>
            <SectionContainer>
              <CardTitle>{d.title}</CardTitle>
              <CardBoxContainer collapsed={!showMore}>
                {d?.match_detail?.map((f) => (
                  <PostCard
                    title={f.title}
                    uuid={f?.uuid}
                    Img={f.thumb_website}
                    reporter={f.reporter_name}
                    time={f.start_time_hour_minute}
                  />
                ))}
              </CardBoxContainer>
        {
          !showMore && <ShoMoreButton onClick={()=>setShowMore(!showMore)}>نمایش بیشتر</ShoMoreButton>

        }
            </SectionContainer>
          </MainContainer>
        ))}
      </CardContainer>
    </MainContainer>
  );
};

export default AheadPart;
