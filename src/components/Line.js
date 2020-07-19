import React from 'react';
import {StyledLineSvg} from "./Line.styled";

export const Line = ({
  paused
}) => {
  return (
  <StyledLineSvg viewBox="0 0 600 12" preserveAspectRatio="none" {...{paused}}>
    <path
      className={"line-path"}
      d={`M0,1 L200,1 C300,1 300,11 400,11 L600,11`}
      strokeWidth={0.75}
      fill={"none"}
    />
  </StyledLineSvg>)

}