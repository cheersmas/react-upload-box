import "./App.css.proxy.js";
import React, {useEffect, useState} from "../../_snowpack/pkg/react.js";
import {ReactUpload} from "../react-component.js";
const App = ({seed, ...rest}) => {
  const [counter, setCounter] = useState(0);
  const [pause, setPause] = useState(false);
  useEffect(() => {
    let timer;
    clearTimeout(timer);
    timer = setTimeout(() => {
      if (counter < 100 && !pause) {
        setCounter(counter + 1);
      }
    }, seed);
    return () => clearTimeout(timer);
  });
  const playPauseDownload = () => {
    setPause(!pause);
  };
  return /* @__PURE__ */ React.createElement(ReactUpload, {
    fileName: "ubuntu-2020-1-2.dmg",
    percentage: counter,
    paused: pause,
    disabled: counter === 100,
    completed: counter === 100,
    onPause: playPauseDownload,
    onStart: playPauseDownload,
    ...rest
  });
};
export default App;
