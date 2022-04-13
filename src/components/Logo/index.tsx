import { Wrapper, Trademark } from "./style";
import React, { FunctionComponent } from "react";
import { BaseComponentProps } from "../../types";

const Logo: FunctionComponent<BaseComponentProps> = ({ variant }) => {
  return (
    <Wrapper color={variant}>
      nintendo{" "}
      <span>
        game boy<Trademark>tm</Trademark>
      </span>
    </Wrapper>
  );
};

export default Logo;
