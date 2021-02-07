import styled, { css } from 'styled-components';

import getColor from '../../utils/themeHelpers';

export interface StyledDownloadBoxProps {
  completed?: boolean;
  paused: boolean;
  percentage: number;
}

const StyledDownloadPercentageBox = styled.div<StyledDownloadBoxProps>`
  ${({ completed, paused, percentage, theme }) => css`
    background: ${getColor(theme.overlayColor, { paused, completed })};
    bottom: 0;
    left: 0;
    overflow: hidden;
    position: absolute;
    right: 0;
    top: 0;
    transform: scaleX(${percentage / 100});
    transform-origin: 0 50%;
    transition: all 200ms linear;
  `}
`;

export default StyledDownloadPercentageBox;
