import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import useMediaQuery from "@mui/material/useMediaQuery";

const ResponsiveForm = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const isMobile = useMediaQuery("(max-width:361px)");
  const isTablet = useMediaQuery("(max-width:741px)");
  const isDesktop = useMediaQuery("(max-width:961px)");

  useEffect(() => {
    let deviceType = "website";
    if (isMobile) deviceType = "mobile";
    else if (isTablet) deviceType = "tablet";

    const newParams = new URLSearchParams(searchParams);
    newParams.set("device_type", deviceType);
    setSearchParams(newParams);
  }, [isMobile, isTablet, isDesktop, searchParams, setSearchParams]);

  return <div>device type</div>;
};

export default ResponsiveForm;
