/* eslint-disable react/jsx-props-no-spreading */
import type { ReactElement } from 'react';
import React from 'react';
import styled from 'styled-components';

import StyledControllerWrapper from '../StyledControllerWrapper';
import type { CommonProps } from './Common';
import { hoverTransition } from './Common';

function More(props: CommonProps): ReactElement {
  return (
    <svg version="1.1" x="0px" y="0px" viewBox="0 0 60 60" {...props}>
      <g>
        <path d="M30,16c4.411,0,8-3.589,8-8s-3.589-8-8-8s-8,3.589-8,8S25.589,16,30,16z" />
        <path d="M30,44c-4.411,0-8,3.589-8,8s3.589,8,8,8s8-3.589,8-8S34.411,44,30,44z" />
        <path d="M30,22c-4.411,0-8,3.589-8,8s3.589,8,8,8s8-3.589,8-8S34.411,22,30,22z" />
      </g>
    </svg>
  );
}

export default styled(More)`
  fill: #8da9c4;
  height: 16px;
  opacity: 0.5;
  z-index: 1;
  ${hoverTransition};
  ${StyledControllerWrapper}:hover & {
    cursor: pointer;
    opacity: 1;
  }
`;
