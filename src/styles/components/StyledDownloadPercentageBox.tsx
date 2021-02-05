import styled, { css } from 'styled-components';

export interface StyledDownloadBoxProps {
  percentage: number;
}

const StyledDownloadPercentageBox = styled.div<StyledDownloadBoxProps>`
  ${({ percentage, theme }) => css`
    background: ${theme.components.secondary};
    border-bottom: 0.5px solid #4d4d4d;
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
