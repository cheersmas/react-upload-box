import styled, {css} from "styled-components";

export const StyledUploadBox = styled.div`
  ${({percentage}) => css`
    display: flex;
    position: relative;
    padding: 20px;
    width: 320px;
    background-color: white;
    border-radius: 8px;
    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      z-index: 0;
      width: ${percentage}%;
      height: 100%;
      background: red;
      opacity: 50%;
      border-top-left-radius: 8px;
      border-bottom-left-radius: 8px;
      box-sizing: content-box;
      transition: width 80ms linear;
    }
  `}
`;