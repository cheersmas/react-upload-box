import type { ReactElement } from 'react';
import React from 'react';
import styled, { css } from 'styled-components';

import type {
  CommonProps,
  StyledLineSvgProps
} from '../../../types/Styles.types';
import getColor from '../../../utils/themeHelpers';
import NormalizedButton from './ButtonWrapper';
import { sharedBehaviour } from './Common';

function Pause(props: CommonProps): ReactElement {
  return (
    <NormalizedButton type="button" aria-label="Pause button" {...props}>
      <svg version="1.1" x="0px" y="0px" viewBox="0 0 320 320">
        <path d="M112,0H16C7.168,0,0,7.168,0,16v288c0,8.832,7.168,16,16,16h96c8.832,0,16-7.168,16-16V16C128,7.168,120.832,0,112,0z" />
        <path d="M304,0h-96c-8.832,0-16,7.168-16,16v288c0,8.832,7.168,16,16,16h96c8.832,0,16-7.168,16-16V16C320,7.168,312.832,0,304,0z" />
      </svg>
    </NormalizedButton>
  );
}

export default styled(Pause)<StyledLineSvgProps>`
  ${({ theme, paused, completed }) => css`
    ${sharedBehaviour(getColor(theme.icons, { paused, completed }))};
  `}
`;
