import {
  Wrapper,
  ScreenFrame,
  ScreenFrameHeader,
  Stack,
  Stripe,
  Text,
} from "./style";
import React, { FunctionComponent } from "react";
import { BaseComponentProps } from "../../types";

const Screen: FunctionComponent<BaseComponentProps> = ({ variant }) => {
  return (
    <Wrapper color={variant}>
      <ScreenFrame>
        <ScreenFrameHeader>
          <Stack size="long">
            <Stripe color="red" />
            <Stripe color="blue" />
          </Stack>
          <Text>dot matrix with stereo sound</Text>
          <Stack size="small">
            <Stripe color="red" />
            <Stripe color="blue" />
          </Stack>
        </ScreenFrameHeader>
      </ScreenFrame>
    </Wrapper>
  );
};

export default Screen;
