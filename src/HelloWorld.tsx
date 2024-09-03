import {
  AbsoluteFill,
  Sequence,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { z } from "zod";
import { zColor } from "@remotion/zod-types";

export const myCompSchema = z.object({
  titleText: z.string(),
  titleColor: zColor(),
  logoColor1: zColor(),
  logoColor2: zColor(),
});

export const HelloWorld: React.FC<z.infer<typeof myCompSchema>> = ({
  titleText,
  titleColor,
  logoColor1,
  logoColor2,
}) => {
  const frame = useCurrentFrame();
  const { durationInFrames, fps } = useVideoConfig();

  // A <AbsoluteFill> is just a absolutely positioned <div>!
  return (
    <AbsoluteFill style={{ backgroundColor: "white" }}>
      <h1>{titleText}</h1>
    </AbsoluteFill>
  );
};
