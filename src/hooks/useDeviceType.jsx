import { useState, useEffect } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';

export default () => {
  const [deviceType, setDeviceType] = useState('website');

  const isMobile = useMediaQuery('(max-width:430px)');
  const isTablet = useMediaQuery('(max-width:741px)');

  useEffect(() => {
    let currentDeviceType = 'website';
    if (isMobile) currentDeviceType = 'mobile_view';

    setDeviceType(currentDeviceType);
  }, [isMobile, isTablet]);

  return deviceType;
};