import React from "react";
import { InfoBox, Title, Details, Time, Date } from "./style";
import convertEnToPe from "../../../../../utils/convertEnToPe";
import { CONVERTDATE, CONVERTTIME } from "../../../../../constant/convertDate";

const ImageInfo = ({ title, time }) => {
  const FullGameTime = CONVERTTIME(time);
  const FullGameDate = CONVERTDATE(time);
  
  return (
    <>
      {title && (
        <InfoBox>
          <Title>{title}</Title>
          <Details>
            <Date>{convertEnToPe(FullGameDate)}</Date>
            <Time> ساعت {convertEnToPe(FullGameTime)}</Time>
          </Details>
        </InfoBox>
      )}
    </>
  );
};

export default ImageInfo;
