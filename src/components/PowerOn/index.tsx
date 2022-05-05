import { Wrapper, Separator, Container, PowerPill, Switch } from "./style";
import React, { FunctionComponent } from "react";
import { BaseComponentProps } from "../../types";

const PowerOn: FunctionComponent<BaseComponentProps> = ({
  onClick,
  variant,
  status,
}) => {
  return (
    <Wrapper color={variant}>
      <Switch color={variant} status={status} />
      <Container>
        <PowerPill color={variant} onClick={onClick}>
          <svg width="14" height="14" viewBox="0 0 14 14">
            <path d="M14 0 L0 7 L14 14 Z" />
          </svg>
          off&middot;on
          <svg width="14" height="14" viewBox="0 0 14 14">
            <path d="M0 0 L14 7 L0 14 Z" />
          </svg>
        </PowerPill>
      </Container>
      <Separator />
    </Wrapper>
  );
};

export default PowerOn;
