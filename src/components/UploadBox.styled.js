import styled, {css} from "styled-components";
import {Cancel, More, Pause, Play, Restart, Stop, Upload} from "../assets";

const hoverTransition = 'transition: all .1s ease';

export const StyledUploadBox = styled.div`
  ${({percentage}) => css`
    display: flex;
    position: relative;
    padding: 20px;
    width: 320px;
    flex-direction: column;
    background-color: #13315C;
    border-radius: 8px;
    overflow: hidden;
  `}
`;

export const StyledUploadPercentageBox = styled.div`
  ${({percentage}) => css`
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      transform-origin: 0 50%;
      background: #134074;
      overflow: hidden;
      transform: scaleX(${percentage / 100});
      transition: all 200ms linear;
  `}
`;

export const StyledControls = styled.div`
  display: flex;
  width: 100%;
  font-size: 16px;
  z-index: 1;
  color: #8DA9C4;
  justify-content: space-between;
  ${hoverTransition};
  & .status {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding-bottom: 4px;
    position: relative;
    .file-name {
      font-weight: 600;
      padding-bottom: 8px;
      color: #EEF4ED;
      ${hoverTransition};
      &:hover {
        cursor: pointer;
      }
    }
    .percentage {
      font-size: 14px;
      display: flex;
      align-items: center;
      padding-bottom: 16px;
      position: relative;
      & .separator {
        position: absolute;
        left: 40px;
        bottom: 17px;
        ${({text, color}) => css`
          &::after {
            content: '${text}';
            position: absolute;
            color: ${color};
            left: 10px;
            bottom: 0;
            width: 100px;
            font-weight: 400;
            font-size: 12px;
          }
        `}
      }
    }
  }
  & .controls {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
`;

const sharedBehaviour = `
  height: 16px;
  padding-right: 20px;
  fill: #8DA9C4;
  ${hoverTransition};
  &:hover {
      opacity: 1;
      fill: #EEF4ED;
      cursor: pointer;
  }
`;

export const StyledPlayButton = styled(Upload)`
  ${sharedBehaviour};
  ${({disabled}) => disabled && css`
    cursor: pointer;
    pointer-events: none;
  `}
`;

export const StyledPauseButton = styled(Pause)`
  ${sharedBehaviour}
`;

export const StyledStopButton = styled(Stop)`
  ${sharedBehaviour};
`;

export const StyledCancelButton = styled(Cancel)`
  ${sharedBehaviour};
  height: 18px;
  fill: #8DA9C4;
  &:hover {
    fill: #c64949
  }
`;

export const StyledRestartButton = styled(Restart)`
  ${sharedBehaviour};
`;

export const StyledControllerWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  cursor: pointer;
`;

export const StyledMoreButton = styled(More)`
  fill: #8DA9C4;
  opacity: 0.5;
  height: 16px;
  ${hoverTransition};
  z-index: 1;
  ${StyledControllerWrapper}:hover & {
    opacity: 1;
    cursor: pointer;
  }
`;

export const StyledExpansionButtons = styled.div`
  position: absolute;
  right: -4px;
  border-radius: 4px;
  background-color: transparent;
  transition: all 200ms ease;
  display: flex;
  justify-content: space-between;
  align-items: center;
  & > * {
    width: 0;
    height: 0;
    opacity: 0;
  }
  ${StyledControllerWrapper}:hover & {
    padding: 20px;
    background-color: #0B2545;
    & > * {
      width: 16px;
      height: 16px;
      opacity: 1;
    }
  }
`;
