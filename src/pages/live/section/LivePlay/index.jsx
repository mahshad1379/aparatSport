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
              style={{ width: "100%", height: "100%" }}
              src={data?.m3u8}
              className="video-js"
              controls
              preload="auto"
              poster={data?.thumb_website}
            />
          </LivePlayVideo>
        ) : (
          <LivePlayImg src={data?.thumb_website} />
        )}
      </LivePlayContainer>
    </MainContainer>
  );
};

export default LivePlay;
