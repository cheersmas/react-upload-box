import styled, { css } from 'styled-components';

export interface StyledControlsProps {
  text: string;
}

const hoverTransition = 'transition: all .1s ease';

const StyledControls = styled.div<StyledControlsProps>`
  color: #8da9c4;
  display: flex;
  font-size: 16px;
  justify-content: space-around;
  width: 100%;
  z-index: 1;
  ${hoverTransition};

  .status {
    display: flex;
    justify-content: flex-start;
    position: relative;
    width: 100%;

    .file-name {
      color: #eef4ed;
      width: 50%;
      ${hoverTransition};

      &:hover {
        cursor: pointer;
      }
    }

    .percentage {
      align-items: center;
      display: flex;
      font-size: 14px;
      justify-content: flex-end;
      padding-right: 10%;
      width: 100%;

      .separator {
        top: 0;
        ${({ text, color }) => css`
          &::after {
            bottom: 0;
            color: ${color};
            content: '${text}';
            font-size: 12px;
            font-weight: 400;
            left: 10px;
            width: 100px;
          }
        `}
      }
    }
  }

  .controls {
    align-items: center;
    display: flex;
    justify-content: flex-start;
  }
`;

export default StyledControls;
