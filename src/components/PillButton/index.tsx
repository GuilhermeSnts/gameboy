import { Wrapper, Pill, Text, Notch } from "./style";
import React, { FunctionComponent } from "react";
import { BaseComponentProps } from "../../types";
import PillButton from "../PillButton";

const Controls: FunctionComponent<BaseComponentProps> = ({
  onClick,
  variant,
  children
}) => {
  return (
    <Wrapper>
      <Notch>
        <Pill onClick={onClick} />
      </Notch>
      <Text color={variant}>{children}</Text>
    </Wrapper>
  );
};

export default Controls;
