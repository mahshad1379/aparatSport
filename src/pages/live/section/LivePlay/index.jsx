import React from "react";
import { LivePlayContainer, LivePlayImg, LivePlayVideo } from "./style";
import { MainContainer } from "../../../../config/globalStyle";

const LivePlay = ({ data }) => {
  return (
    <MainContainer>
      <LivePlayContainer>
        {data?.live_status === "live" ? (
          <LivePlayVideo>
            <video
              id="my-player"
              class="video-js"
              controls
              preload="auto"
              poster="//vjs.zencdn.net/v/oceans.png"
              data-setup="{}"
              // width= {1136}
              // height= {556}
            >
              <source src={data?.m3u8} />
            </video>
          </LivePlayVideo>
        ) : (
          <LivePlayImg src={data?.thumb_website}/>
        )}
      </LivePlayContainer>
    </MainContainer>
  );
};

export default LivePlay;
