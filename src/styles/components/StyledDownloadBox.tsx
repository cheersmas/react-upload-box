import styled, { css } from 'styled-components';

import type { StyledLineSvgProps } from '../../types/Styles.types';
import getColor from '../../utils/themeHelpers';

const StyledDownloadBox = styled.div<StyledLineSvgProps>`
  ${({ theme, paused, completed }) => css`
    background-color: ${getColor(theme.box, { paused, completed })};
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    padding: 24px;
    position: relative;
    transition: background-color 300ms linear;
    width: 100%;
  `}
`;

export default StyledDownloadBox;
