import styled, { css } from 'styled-components';

const StyledDownloadBox = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.box.backgroundColor};
    display: flex;
    flex-direction: column;
    overflow: hidden;
    padding: 24px;
    position: relative;
    width: 100%;
  `}
`;

export default StyledDownloadBox;
