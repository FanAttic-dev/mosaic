import { useEffect, useState } from "react";
// import Masonry from "@mui/lab/Masonry";
import Masonry from "react-responsive-masonry";
import {
  AbsoluteFill,
  OffthreadVideo,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";

export const GMMosaicMasonryComposition: React.FC = () => {
  const videoConfig = useVideoConfig();
  const frame = useCurrentFrame();

  const videos = require("../../../public/assets/user_videos.json");
  console.log(videos.length);

  const getTransform = (frame: number) => {
    return `translateY(-${frame * 7}px)`;
  };

  const containerStyle = {
    transform: getTransform(frame),
  };

  const videoStyle = () => ({
    width: "100%",
    // height: `${videoConfig.height / 3}px`,
  });

  return (
    <Masonry columnsCount={10} gutter="0px" style={containerStyle}>
      {videos.map((video, index) => (
        <OffthreadVideo
          key={index}
          src={video}
          style={videoStyle()}
          volume={0}
        />
      ))}
    </Masonry>
  );
};
