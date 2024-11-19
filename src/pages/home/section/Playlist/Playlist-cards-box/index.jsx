import React from "react";
import {
  CalenderContainer,
  PlaylistContainer,
  PlaylistContentContainer,
  PlaylistCardContainer,
  PlaylistTitle,
} from "./stayle";
import PostCard from "../../../components/Post-card";
import Calender from "../Calender";
import DATE from "../../../../../constant/date";
import { MainContainer } from "../../../../../config/globalStyle";

const Playlist = ({ data, setClickDate }) => {
  const days = [0, 1, 2, 3, 4, 5, 6, 7];
  return (
    <MainContainer>
      <PlaylistContainer>
        <PlaylistTitle>برنامه پخش</PlaylistTitle>
        <PlaylistContentContainer>
          <CalenderContainer>
            {days.map((i, index) => (
              <Calender
                onClick={() => {
                  setClickDate(index);
                }}
                day={DATE(i)}
              />
            ))}
          </CalenderContainer>
          <PlaylistCardContainer>
            {data?.map((f) => (
              <PostCard
                title={f.title}
                Img={f.thumb_website}
                reporter={f.reporter_name}
                time={f.start_time_hour_minute}
              />
            ))}
          </PlaylistCardContainer>
        </PlaylistContentContainer>
      </PlaylistContainer>
    </MainContainer>
  );
};

export default Playlist;
