import styled, { css } from 'styled-components';

const hoverTransition = 'transition: all .1s ease';

const StyledControls = styled.div`
  ${({ theme }) => css`
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
        color: ${theme.text.fileName};
        width: 50%;
        ${hoverTransition};

        &:hover {
          cursor: pointer;
        }
      }

      .percentage {
        align-items: center;
        color: ${theme.text.percentage};
        display: flex;
        font-size: 14px;
        justify-content: flex-end;
        padding-right: 10%;
        width: 100%;
      }
    }

    .controls {
      align-items: center;
      display: flex;
      justify-content: flex-start;
    }
  `}
`;

export default StyledControls;
