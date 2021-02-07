import "./App.css.proxy.js";
import React from "../../_snowpack/pkg/react.js";
import Example1 from "./Example-1.js";
import {customTheme} from "./themes/dark-theme.js";
const MAX_TIME = 800;
const MIN_TIME = 500;
const App = () => /* @__PURE__ */ React.createElement("div", {
  className: "outer-container"
}, /* @__PURE__ */ React.createElement("section", {
  id: "example-1",
  className: "example-set-one"
}, /* @__PURE__ */ React.createElement(Example1, {
  mode: "light",
  seed: Math.random() * (MAX_TIME - MIN_TIME) + MIN_TIME
}), /* @__PURE__ */ React.createElement(Example1, {
  mode: "dark",
  className: "second",
  seed: Math.random() * (MAX_TIME - MIN_TIME) + MIN_TIME
}), /* @__PURE__ */ React.createElement(Example1, {
  className: "third",
  theme: customTheme,
  seed: Math.random() * (MAX_TIME - MIN_TIME) + MIN_TIME
})));
export default App;
