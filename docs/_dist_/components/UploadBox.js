import React from "../../_snowpack/pkg/react.js";
import {
  PauseButton,
  PlayButton,
  StyledControls,
  StyledLine,
  StyledUploadBox,
  StyledUploadPercentageBox
} from "../styles/components/index.js";
const UploadBox = ({
  completed,
  disabled,
  fileName,
  onPause,
  onStart,
  percentage,
  paused,
  strokeHeight = "25%",
  strokeWidth = 2,
  ...rest
}) => /* @__PURE__ */ React.createElement(StyledUploadBox, {
  ...{percentage, completed, paused, ...rest}
}, /* @__PURE__ */ React.createElement(StyledControls, {
  ...{percentage}
}, /* @__PURE__ */ React.createElement("div", {
  className: "status"
}, /* @__PURE__ */ React.createElement("div", {
  className: "file-name"
}, fileName), /* @__PURE__ */ React.createElement("div", {
  className: "percentage"
}, /* @__PURE__ */ React.createElement("span", null, `${percentage}%`))), /* @__PURE__ */ React.createElement("div", {
  className: "controls"
}, paused || completed ? /* @__PURE__ */ React.createElement(PlayButton, {
  onClick: onStart,
  ...{completed, paused, disabled}
}) : /* @__PURE__ */ React.createElement(PauseButton, {
  onClick: onPause,
  ...{completed, paused}
}))), /* @__PURE__ */ React.createElement(StyledUploadPercentageBox, {
  ...{completed, paused, percentage}
}, /* @__PURE__ */ React.createElement(StyledLine, {
  ...{completed, paused, strokeHeight, strokeWidth}
})));
export default UploadBox;
