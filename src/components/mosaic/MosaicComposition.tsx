import { useEffect, useState } from "react";
import {
  AbsoluteFill,
  OffthreadVideo,
  Sequence,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
  Video,
} from "remotion";

export const MosaicComposition: React.FC = () => {
  const videoConfig = useVideoConfig();
  const frame = useCurrentFrame();

  const videos = require("../../../public/assets/user_videos.json");
  console.log(videos.length);

  const gridContainerStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(63, 1fr)",
    height: "fit-content",
  };

  const videoWrapperStyle = {
    position: "relative" as "relative",
    width: "100%",
    height: "100%",
  };

  const videoStyle = {
    width: "100%",
    height: "100%",
    aspectRatio: "9/16",
    objectFit: "cover",
  };

  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const overlayStyle = {
    position: "absolute" as "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    opacity: 0.5,
  };

  return (
    <div style={gridContainerStyle}>
      {videos.map((video, index) => (
        <div key={index} style={videoWrapperStyle}>
          <OffthreadVideo
            muted
            src={video.url}
            style={videoStyle}
            toneMapped={false}
          />
          {/* <div
            style={{ ...overlayStyle, backgroundColor: getRandomColor() }}
          ></div> */}
        </div>
      ))}
    </div>
  );
};
