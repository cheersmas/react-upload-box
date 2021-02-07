import styled, {css} from "../../../_snowpack/pkg/styled-components.js";
import getColor from "../../utils/themeHelpers.js";
const StyledUploadPercentageBox = styled.div`
  ${({completed, paused, percentage, theme}) => css`
    background: ${getColor(theme.overlayColor, {paused, completed})};
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
export default StyledUploadPercentageBox;
