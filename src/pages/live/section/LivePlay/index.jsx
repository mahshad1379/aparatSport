import React from "react";
// import ReactHlsPlayer from 'react-hls-player';
import { LivePlayContainer, LivePlayImg, LivePlayVideo } from "./style";
import { MainContainer } from "../../../../config/globalStyle";

const LivePlay = ({ data }) => {
  return (
    <MainContainer>
      <LivePlayContainer>
        {data?.live_status == "live" ? (
          // <ReactHlsPlayer
          //   src={data.m3u8}
          //   autoPlay={false}
          //   controls={true}
          //   width="100%"
          //   height="auto"
          // />
          <LivePlayVideo>
            <video
              id="my-player"
              class="video-js"
              controls
              preload="auto"
              poster="//vjs.zencdn.net/v/oceans.png"
              data-setup="{}"
            >
              <source src={data.m3u8} />
            </video>
          </LivePlayVideo>
        ) : (
          <LivePlayImg>{data?.thumb_website}</LivePlayImg>
        )}
      </LivePlayContainer>
    </MainContainer>
  );
};

export default LivePlay;
