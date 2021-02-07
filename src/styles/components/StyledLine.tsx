import type { ReactElement } from 'react';
import React from 'react';
import styled, { css } from 'styled-components';

import type { StyledLineSvgProps } from '../../types/Styles.types';
import getColor from '../../utils/themeHelpers';

const StyledLineSvg = styled.svg<StyledLineSvgProps>`
  ${({ theme, paused, completed }) => css`
    bottom: 0;
    left: 0;
    position: absolute;
    stroke: ${getColor(theme.line, { paused, completed })};
    transform: translateX(${paused ? '-66.67' : '0'}%);
    transition: transform 1s ease, stroke 300ms linear;
    width: 300%;
  `};
`;

const Line = ({
  strokeWidth,
  strokeHeight,
  ...rest
}: StyledLineSvgProps): ReactElement => (
  <StyledLineSvg
    viewBox="0 0 600 12"
    preserveAspectRatio="none"
    height={strokeHeight}
    {...rest}
  >
    <path
      vectorEffect="non-scaling-stroke"
      className="line-path"
      d="M0,1 L200,1 C300,1 300,12 400,12 L600,12"
      strokeWidth={strokeWidth}
      fill="none"
    />
  </StyledLineSvg>
);

export default Line;
