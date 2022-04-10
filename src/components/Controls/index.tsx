import { Wrapper } from "./style";
import React, { FunctionComponent } from "react";
import { BaseComponentProps } from "../../types";

const Controls: FunctionComponent<BaseComponentProps> = ({
  onClick,
  variant,
}) => {
  return (
    <Wrapper color={variant}>
      {/* controls */}
    </Wrapper>
  );
};

export default Controls;
