import React from 'react';
import styled, { css } from 'styled-components';

export interface StyledLineSvgProps {
  paused: boolean;
}

const StyledLineSvg = styled.svg<StyledLineSvgProps>`
  ${({ paused }) => css`
    bottom: 0;
    left: 0;
    position: absolute;
    stroke: ${ !paused ? '#ff5100' : 'rgba(238,244,237,0.32)'};
    transform: translateX(${paused ? '-66.67' : '0'}%);
    transition: transform 1s ease, stroke 300ms linear;
    width: 300%;
  `};
`;

const Line = ({ paused }: StyledLineSvgProps) => (
  <StyledLineSvg
    viewBox="0 0 600 12"
    preserveAspectRatio="none"
    height="100%"
    {...{ paused }}
  >
    <path
      vectorEffect="non-scaling-stroke"
      className="line-path"
      d="M0,1 L200,1 C300,1 300,12 400,12 L600,12"
      strokeWidth={8}
      fill="none"
    />
  </StyledLineSvg>
);

export default Line;
