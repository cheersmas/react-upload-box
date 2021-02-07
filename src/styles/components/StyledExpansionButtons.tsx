import styled, { css } from 'styled-components';

import StyledControllerWrapper from './StyledControllerWrapper';

const StyledExpansionButtons = styled.div`
  ${({ theme }) => css`
    align-items: center;
    background-color: transparent;
    border-radius: 4px;
    display: flex;
    justify-content: space-between;
    position: absolute;
    right: -4px;
    transition: all 200ms ease;

    > * {
      height: 0;
      opacity: 0;
      width: 0;
    }
    ${StyledControllerWrapper}:hover & {
      background-color: ${theme.ellipsisMenu.backgroundColor};
      padding: 20px;

      > * {
        height: 16px;
        opacity: 1;
        width: 16px;
      }
    }
  `}
`;

export default StyledExpansionButtons;
