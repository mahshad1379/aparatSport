import React from 'react'
import Timer from "../../../../../component/Timer";
import ImageInfo from "../Info";
import { ImgContainer, InfoBox, SliderBox, TimerBox } from './style';
const SliderContent = ({item}) => {
  return (
    <SliderBox>
    <TimerBox>
      <Timer time={item.start_time} isLive={false} />
    </TimerBox>
    <ImgContainer src={item.thumb_website} />
    <InfoBox>
      <ImageInfo title={item.title} time={item.start_time} />
    </InfoBox>
  </SliderBox>
  )
}

export default SliderContent