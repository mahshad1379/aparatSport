import React, { useState } from "react";
import {
  DownloadBoxItem,
  DownloadBoxContent,
  DownloadBoxTitle,
  DownloadBoxTitleLogo,
  DownloadBoxTitleText,
} from "./styes.js";
import DownloadButton from "../DownloadButton";
import Arrow from "../../Arrow";
import { ARROW_UP, ARROW_DOWN } from "../../../constant/arrow.js";

const DownloadBox = ({ title, logo }) => {
  const [show, setShow] = useState(false);

  return (
    <DownloadBoxItem>
      <DownloadBoxContent>
        <DownloadBoxTitle>
          <DownloadBoxTitleLogo>{logo}</DownloadBoxTitleLogo>
          <DownloadBoxTitleText>{title}</DownloadBoxTitleText>
        </DownloadBoxTitle>
        <div onClick={() => setShow(!show)}>
          {show ? <Arrow arrow={ARROW_DOWN} /> : <Arrow arrow={ARROW_UP} />}
        </div>
      </DownloadBoxContent>
      <DownloadButton show={show} />
    </DownloadBoxItem>
  );
};

export default DownloadBox;
