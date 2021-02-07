import styled, { css } from 'styled-components';

const StyledDownloadBox = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.components.primary};
    border-bottom: 0.5px solid #4d4d4d;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    padding: 24px;
    position: relative;
    width: 100%;
  `}
`;

export default StyledDownloadBox;
