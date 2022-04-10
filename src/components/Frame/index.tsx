import { Frame as FrameStyle } from "./style";
import React from "react";

const Frame: React.FC = ({ children }) => {
  return <FrameStyle color="offWhite">{children}</FrameStyle>;
};

export default Frame;
