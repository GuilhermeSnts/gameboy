import { Frame as FrameStyle } from "./style";
import React from "react";
import { BaseComponentProps } from "../../types";

const Frame: React.FC<BaseComponentProps> = ({ children, variant }) => {
  return <FrameStyle color={variant}>{children}</FrameStyle>;
};

export default Frame;
