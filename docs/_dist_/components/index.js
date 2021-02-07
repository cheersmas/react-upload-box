import React from "../../_snowpack/pkg/react.js";
import {ThemeProvider} from "../../_snowpack/pkg/styled-components.js";
import {darkTheme, lightTheme} from "../styles/themes/index.js";
import UploadBox from "./UploadBox.js";
const Root = ({mode = "light", theme, ...rest}) => /* @__PURE__ */ React.createElement(ThemeProvider, {
  theme: theme || (mode === "light" ? lightTheme : darkTheme)
}, /* @__PURE__ */ React.createElement(UploadBox, {
  ...rest
}));
export default Root;
