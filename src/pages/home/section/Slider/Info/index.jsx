import React from "react";
import { InfoBox, Title, Details, Time, Date } from "./style";
import PN from "persian-number";

const ImageInfo = ({ title, time }) => {
  const gameTime =
    String(String(time).split(" ")[1]).split(":")[0] +
    ":" +
    String(String(time).split(" ")[1]).split(":")[1];
  const gameDateyear = String(String(time).split(" ")[0]).split("-")[0];
  const gameDateMonth = String(String(time).split(" ")[0]).split("-")[1];
  const gameDateDay = String(String(time).split(" ")[0]).split("-")[2];
  let months = "";
  switch (String(gameDateMonth)) {
    case "1":
      months = "فروردین";
      break;
    case "2":
      months = "اردیبهشت";
      break;
    case "3":
      months = "خرداد";
      break;
    case "4":
      months = "نیر";
      break;
    case "5":
      months = "مرداد";
      break;
    case "6":
      months = "شهریور";
      break;
    case "7":
      months = "مهر";
      break;
    case "8":
      months = "آبان";
      break;
    case "9":
      months = "آذر";
      break;
    case "10":
      months = "دی";
      break;
    case "11":
      months = "بهمن";
      break;
    case "12":
      months = "اسفند";
      break;
  }

  let gameDate = gameDateDay + " " + months + " " + gameDateyear;
  return (
    <>
      {title ? (
        <InfoBox>
          <Title>{title}</Title>
          <Details>
            <Date>{PN.convertEnToPe(gameDate)}</Date>
            <Time> ساعت {PN.convertEnToPe(gameTime)}</Time>
          </Details>
        </InfoBox>
      ) : (
        ""
      )}
    </>
  );
};

export default ImageInfo;
