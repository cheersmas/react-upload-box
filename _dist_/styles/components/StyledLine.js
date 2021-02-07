import React from "../../../_snowpack/pkg/react.js";
import styled, {css} from "../../../_snowpack/pkg/styled-components.js";
import getColor from "../../utils/themeHelpers.js";
const StyledLineSvg = styled.svg`
  ${({theme, paused, completed}) => css`
    bottom: 0;
    left: 0;
    position: absolute;
    stroke: ${getColor(theme.line, {paused, completed})};
    transform: translateX(${paused ? "-66.67" : "0"}%);
    transition: transform 1s ease, stroke 300ms linear;
    width: 300%;
  `};
`;
const Line = ({
  strokeWidth,
  strokeHeight,
  ...rest
}) => /* @__PURE__ */ React.createElement(StyledLineSvg, {
  viewBox: "0 0 600 12",
  preserveAspectRatio: "none",
  height: strokeHeight,
  ...rest
}, /* @__PURE__ */ React.createElement("path", {
  vectorEffect: "non-scaling-stroke",
  className: "line-path",
  d: "M0,1 L200,1 C300,1 300,12 400,12 L600,12",
  strokeWidth,
  fill: "none"
}));
export default Line;
