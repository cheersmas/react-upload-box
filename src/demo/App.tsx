import './App.css';

import type { FC } from 'react';
import React, { useEffect, useState } from 'react';

import { ReactDownload } from '../react-component';

const App: FC = () => {
  const [counter, setCounter] = useState(0);
  const [pause, setPause] = useState(false);
  useEffect(() => {
    let timer;
    clearTimeout(timer);
    timer = setTimeout(() => {
      if (counter < 100 && !pause) {
        setCounter(counter + 1);
      }
    }, 100);
    return () => clearTimeout(timer);
  });
  const playPauseDownload = () => {
    setPause(!pause);
  };
  return (
    <div className="outer-container">
      <ReactDownload
        mode="light"
        fileName="something"
        percentage={counter}
        paused={pause}
        disabled={counter === 100}
        completed={counter === 100}
        onPause={playPauseDownload}
        onStart={playPauseDownload}
      />
    </div>
  );
};

export default App;
//
