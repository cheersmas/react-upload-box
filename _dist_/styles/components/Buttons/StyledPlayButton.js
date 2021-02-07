import React from "../../../../_snowpack/pkg/react.js";
import styled, {css} from "../../../../_snowpack/pkg/styled-components.js";
import getColor from "../../../utils/themeHelpers.js";
import NormalizedButton from "./ButtonWrapper.js";
import {sharedBehaviour} from "./Common.js";
function Play(props) {
  return /* @__PURE__ */ React.createElement(NormalizedButton, {
    type: "button",
    ...props
  }, /* @__PURE__ */ React.createElement("svg", {
    version: "1.1",
    x: "0px",
    y: "0px",
    viewBox: "0 0 320.001 320.001"
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M295.84,146.049l-256-144c-4.96-2.784-11.008-2.72-15.904,0.128C19.008,5.057,16,10.305,16,16.001v288\n        c0,5.696,3.008,10.944,7.936,13.824c2.496,1.44,5.28,2.176,8.064,2.176c2.688,0,5.408-0.672,7.84-2.048l256-144\n        c5.024-2.848,8.16-8.16,8.16-13.952S300.864,148.897,295.84,146.049z"
  })));
}
export default styled(Play)`
  ${({theme, paused, completed, disabled}) => css`
    ${sharedBehaviour(getColor(theme.icons, {paused, completed, disabled}))};
    ${disabled && css`
      cursor: pointer;
      pointer-events: none;
    `}
  `}
`;
