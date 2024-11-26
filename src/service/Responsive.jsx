import React, { useEffect, useState } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";

const useResponsiveForm = () => {
  const [deviceType, setDeviceType] = useState("");

  const isMobile = useMediaQuery("(max-width:361px)");
  const isDesktop = useMediaQuery("(max-width:961px)");

  useEffect(() => {
    let deviceType = "website";
    if (isMobile) deviceType = "mobile_view";
    setDeviceType(deviceType);
  }, [isMobile, isDesktop]);

  return deviceType;
};

export default useResponsiveForm;
