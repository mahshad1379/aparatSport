import React from "react";
import { CalenderBox, CalenderDate } from "./stayle";

const Calender = ({day, onClick}) => {
  return (
    <CalenderBox>
      <CalenderDate onClick={onClick}>{day}</CalenderDate>
    </CalenderBox>
  );
};

export default Calender;
