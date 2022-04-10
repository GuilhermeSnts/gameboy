import { Wrapper, AudioHole } from "./style";
import React, { FunctionComponent } from "react";
import { BaseComponentProps } from "../../types";

const PowerOn: FunctionComponent<BaseComponentProps> = ({
  onClick,
  variant,
}) => {
  return (
    <Wrapper onClick={onClick}>
      <AudioHole />
      <AudioHole />
      <AudioHole />
      <AudioHole />
      <AudioHole />
      <AudioHole />
    </Wrapper>
  );
};

export default PowerOn;
