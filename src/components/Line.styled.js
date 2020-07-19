import styled, {css} from 'styled-components';

export const StyledLineSvg = styled.svg`
  ${({paused}) => css`
    position: absolute;
    left: 0;
    bottom: 6px;
    width: 300%;
    transform: translateX(${paused ? '-66.67' : '0'}%);
    transition: transform 1s ease, stroke 300ms linear;
    stroke: ${!paused ? '#c32361' : '#13315C'};
  `};
`;