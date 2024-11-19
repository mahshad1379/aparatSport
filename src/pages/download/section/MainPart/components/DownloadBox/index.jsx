import React from "react";
import {
  DownloadBoxItem,
  DownloadBoxContent,
  DownloadBoxTitle,
  DownloadBoxTitleLogo,
  DownloadBoxTitleText,
} from "./styes.js";
import DownloadButton from "../DownloadButton/index.jsx";
import Icon from "../../../../Icon/index.jsx";

const DownloadBox = ({ item, index, openKey, handleOpenAccordion}) => {
  return (
    <DownloadBoxItem>
      <DownloadBoxContent>
        <DownloadBoxTitle>
          <DownloadBoxTitleLogo>{item.logo}</DownloadBoxTitleLogo>
          <DownloadBoxTitleText>{item.text}</DownloadBoxTitleText>
        </DownloadBoxTitle>
        <div onClick={() => handleOpenAccordion(index)}>
          {openKey === index ? (
            <Icon
              style={{
                padding: "8.25px 4.25px 8.25px 4.25px",
                textAlign: "center",
              }}
              name={"arrow_down"}
              width="16px"
              height="8px"
              viewBox="0 0 16 8"
              fill="none"
            />
          ) : (
            <Icon
              style={{
                padding: "8.25px 4.25px 8.25px 4.25px",
                textAlign: "center",
              }}
              name={"arrow_up"}
              width="16px"
              height="8px"
              viewBox="0 0 16 8"
              fill="none"
            />
          )}
        </div>
      </DownloadBoxContent>
      {openKey === index && <DownloadButton/>}
    </DownloadBoxItem>
  );
};

export default DownloadBox;
