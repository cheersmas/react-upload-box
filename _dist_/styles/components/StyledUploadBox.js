import styled, {css} from "../../../_snowpack/pkg/styled-components.js";
import getColor from "../../utils/themeHelpers.js";
const StyledUploadBox = styled.div`
  ${({theme, paused, completed}) => css`
    background-color: ${getColor(theme.box, {paused, completed})};
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    padding: 24px;
    position: relative;
    transition: background-color 300ms linear;
    width: 100%;
  `}
`;
export default StyledUploadBox;
