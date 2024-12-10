import React, { useState, useEffect } from "react";
import moment from "moment/moment";
import convertEnToPe from "../../utils/convertEnToPe";
import { Time, TimeBox, TimerContainer, TimerText, TimeText } from "./style";

const Timer = ({ time, isLive = true }) => {
  const [isTime, setIsTime] = useState(false);
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
 
  useEffect(() => {
    if (hours > 0 && minutes > 0 && seconds > 0 && time) setIsTime(true);
  }, [hours, minutes, seconds, time]);
  return (
    <>
      {isTime && (
        <TimerContainer>
          {isLive && <TimerText>مانده تا شروع</TimerText>}
          <TimeBox>
            <Time>{convertEnToPe(hours)}</Time>
            <TimeText>ساعت</TimeText>
          </TimeBox>
          <TimeBox>
            <Time>{convertEnToPe(minutes)}</Time>
            <TimeText>دقیقه</TimeText>
          </TimeBox>
          <TimeBox>
            <Time>{convertEnToPe(seconds)}</Time>
            <TimeText>ثانیه</TimeText>
          </TimeBox>
        </TimerContainer>
      )}
    </>
  );
};

export default Timer;
