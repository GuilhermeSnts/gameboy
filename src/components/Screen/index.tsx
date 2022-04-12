import {
  Wrapper,
  ScreenFrame,
  ScreenFrameHeader,
  Stack,
  Stripe,
  Text,
  ScreenMainContent,
  BatteryAllert,
  BatteryLED,
  Canvas,
} from "./style";
import React, { FunctionComponent } from "react";
import { BaseComponentProps } from "../../types";

const Screen: FunctionComponent<BaseComponentProps> = ({ variant, status }) => {
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
        <ScreenMainContent>
          <BatteryAllert>
            <BatteryLED status={status} />
            battery
          </BatteryAllert>
          <Canvas></Canvas>
        </ScreenMainContent>
      </ScreenFrame>
    </Wrapper>
  );
};

export default Screen;
