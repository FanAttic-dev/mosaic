import { useEffect, useState } from "react";
import {
  AbsoluteFill,
  OffthreadVideo,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";

const POP_OUT_FRAME_INDEX = 15;

export const GMMosaicComposition: React.FC = () => {
  const videoConfig = useVideoConfig();
  const frame = useCurrentFrame();

  const videos = require("../../../public/assets/user_videos.json");
  console.log(videos.length);

  const getTransform = (frame: number) => {
    const scale = `scale(${1 + frame / (videoConfig.durationInFrames / 2)})`;
    // if (frame < videoConfig.durationInFrames / 2) {
    //   return scale;
    // }

    const translate = `translateX(${(-frame / videoConfig.durationInFrames) * 100}%)`;

    return `${translate} ${scale}`;
  };

  const gridContainerStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(10, 1fr)",
    gap: "2px",
    // transform: getTransform(frame),
  };

  const videoStyle = {
    width: "100%",
    height: `${videoConfig.height / 3}px`,
  };

  const getVideoStyle = (index: number) => {
    return videoStyle;
    const popOutFrameStart = 30;
    const isPoppingOut = frame >= popOutFrameStart;
    const scale = isPoppingOut
      ? 1 +
        (frame - popOutFrameStart) /
          (videoConfig.durationInFrames - popOutFrameStart)
      : 1;
    return {
      ...videoStyle,
      transform: index == POP_OUT_FRAME_INDEX ? `scale(${scale})` : "none",
      zIndex: index == POP_OUT_FRAME_INDEX ? 1 : 0,
    };
  };

  return (
    <div style={gridContainerStyle}>
      {videos.map((video, index) => (
        <OffthreadVideo
          key={index}
          src={video}
          style={getVideoStyle(index)}
          volume={0}
        />
      ))}
    </div>
  );
};
