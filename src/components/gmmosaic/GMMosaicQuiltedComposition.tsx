import {
  AbsoluteFill,
  OffthreadVideo,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";

export const GMMosaicQuiltedComposition: React.FC = () => {
  const videoConfig = useVideoConfig();
  const frame = useCurrentFrame();

  const videos = require("../../../public/assets/user_videos.json");
  console.log(videos.length);

  const containerStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(25, 1fr)",
    // transform: `translateY(-${frame * 2}px)`,
    // gridTemplateRows: "masonry",
    gridAutoFlow: "row dense",
    // gap: "2px",
  };

  const videoStyle = (index: number) => ({
    width: "100%",
    height: "100%",
    objectFit: "cover",
    gridColumn: videos[index].gridColumn,
    gridRow: videos[index].gridRow,
  });

  return (
    <div style={containerStyle}>
      {videos.map((video, index) => {
        return (
          <OffthreadVideo
            key={index}
            src={video.url}
            style={videoStyle(index)}
            volume={0}
          />
        );
      })}
    </div>
  );
};
