import type { ReactElement } from 'react';
import React from 'react';
import styled, { css } from 'styled-components';

import type {
  ButtonProps,
  CommonProps,
  StyledLineSvgProps
} from '../../../types/Styles.types';
import getColor from '../../../utils/themeHelpers';
import NormalizedButton from './ButtonWrapper';
import { sharedBehaviour } from './Common';

function Play(props: CommonProps): ReactElement {
  return (
    <NormalizedButton type="button" {...props}>
      <svg version="1.1" x="0px" y="0px" viewBox="0 0 320.001 320.001">
        <path
          d="M295.84,146.049l-256-144c-4.96-2.784-11.008-2.72-15.904,0.128C19.008,5.057,16,10.305,16,16.001v288
        c0,5.696,3.008,10.944,7.936,13.824c2.496,1.44,5.28,2.176,8.064,2.176c2.688,0,5.408-0.672,7.84-2.048l256-144
        c5.024-2.848,8.16-8.16,8.16-13.952S300.864,148.897,295.84,146.049z"
        />
      </svg>
    </NormalizedButton>
  );
}

export default styled(Play)<StyledLineSvgProps & ButtonProps>`
  ${({ theme, paused, completed, disabled }) => css`
    ${sharedBehaviour(getColor(theme.icons, { paused, completed, disabled }))};
    ${disabled &&
    css`
      cursor: pointer;
      pointer-events: none;
    `}
  `}
`;
