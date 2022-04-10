import { Wrapper, Separator, Container, PowerPill } from "./style";
import React from "react";

const PowerOn: React.FC = () => {
  return (
    <Wrapper color="offWhite">
      <Container>
        <PowerPill>
          on . off
        </PowerPill>
      </Container>
      <Separator />
    </Wrapper>
  );
};

export default PowerOn;
