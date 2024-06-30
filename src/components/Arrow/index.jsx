import React from "react";
import { ArrowDown, ArrowVictor } from "./styles.js";

const Arrow = ({ arrow }) => {
  return (
    <>
      <ArrowDown>
        <ArrowVictor>{arrow}</ArrowVictor>
      </ArrowDown>
    </>
  );
};

export default Arrow;
