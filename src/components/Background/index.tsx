import { Background as BackgroundStyle } from "./style";
import React, { ReactNode, useState } from "react";

interface BackgroundProps {
  children: ReactNode;
}

const Background: React.FC<BackgroundProps> = ({ children }) => {
  const [color, setColor] = useState<"day" | "noon" | "night">("night");

  return <BackgroundStyle color={color}>{children}</BackgroundStyle>;
};

export default Background;
