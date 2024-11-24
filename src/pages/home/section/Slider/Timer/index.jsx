import React from "react";
import { Time, TimeBox, TimerContainer, TimeText } from "./style";
import moment from "moment/moment";

const Timer = ({ time }) => {
  const gameTime = String(time).split(" ")[1];
  const currentTime =
    new Date().getHours() +
    ":" +
    new Date().getMinutes() +
    ":" +
    new Date().getSeconds();

  const time2 = moment(currentTime, "hh:mm:ss");
  const time1 = moment(gameTime, "hh:mm:ss");

  const hours = time1.diff(time2, "hours");
  time2.add(hours, "hours");

  const minutes = time1.diff(time2, "minutes");
  time2.add(minutes, "minutes");

  const seconds = time1.diff(time2, "seconds");
  time2.add(seconds, "seconds");

  return (
    <>
      {time ? (
        <TimerContainer>
          <TimeBox>
            <Time>{hours}</Time>
            <TimeText>ساعت</TimeText>
          </TimeBox>
          <TimeBox>
            <Time>{minutes}</Time>
            <TimeText>دقیقه</TimeText>
          </TimeBox>
          <TimeBox>
            <Time>{seconds}</Time>
            <TimeText>ثانیه</TimeText>
          </TimeBox>
        </TimerContainer>
      ) : (
        ""
      )}
    </>
  );
};

export default Timer;
