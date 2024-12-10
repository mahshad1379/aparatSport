import React from "react";
import { CalenderBox, CalenderDate } from "./style";
import convertEnToPe from "../../../../../utils/convertEnToPe";

const Calender = ({ day, onClick }) => {
  return (
    <CalenderBox>
      <CalenderDate onClick={onClick}>{convertEnToPe(day)}</CalenderDate>
    </CalenderBox>
  );
};

export default Calender;
