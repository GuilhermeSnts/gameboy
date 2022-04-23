import {
  Wrapper,
  MainArea,
  DirectionalControls,
  ActionControls,
  ConfigControls,
} from "./style";
import React, { FunctionComponent } from "react";
import { BaseComponentProps } from "../../types";
import PillButton from '../PillButton';

const Controls: FunctionComponent<BaseComponentProps> = ({
  onClick,
  variant,
}) => {
  return (
    <Wrapper color={variant}>
      <MainArea>
        <DirectionalControls></DirectionalControls>
        <ActionControls></ActionControls>
      </MainArea>
      <ConfigControls>
        <PillButton onClick={onClick} variant={variant}>Select</PillButton>
        <PillButton onClick={onClick} variant={variant}>Start</PillButton>
      </ConfigControls>
    </Wrapper>
  );
};

export default Controls;
