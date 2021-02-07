import React from "../../../../_snowpack/pkg/react.js";
import styled, {css} from "../../../../_snowpack/pkg/styled-components.js";
import getColor from "../../../utils/themeHelpers.js";
import NormalizedButton from "./ButtonWrapper.js";
import {sharedBehaviour} from "./Common.js";
function Pause(props) {
  return /* @__PURE__ */ React.createElement(NormalizedButton, {
    type: "button",
    ...props
  }, /* @__PURE__ */ React.createElement("svg", {
    version: "1.1",
    x: "0px",
    y: "0px",
    viewBox: "0 0 320 320"
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M112,0H16C7.168,0,0,7.168,0,16v288c0,8.832,7.168,16,16,16h96c8.832,0,16-7.168,16-16V16C128,7.168,120.832,0,112,0z"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M304,0h-96c-8.832,0-16,7.168-16,16v288c0,8.832,7.168,16,16,16h96c8.832,0,16-7.168,16-16V16C320,7.168,312.832,0,304,0z"
  })));
}
export default styled(Pause)`
  ${({theme, paused, completed}) => css`
    ${sharedBehaviour(getColor(theme.icons, {paused, completed}))};
  `}
`;
