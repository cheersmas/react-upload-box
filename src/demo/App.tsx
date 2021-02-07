import './App.css';

import type { FC } from 'react';
import React, { useEffect, useState } from 'react';

import { ReactDownload } from '../react-component';

const App: FC = () => {
  const [pause, setPause] = useState(false);
  const [counter, setCounter] = useState(0);
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
        fileName="something"
        percentage={counter}
        paused={pause}
        completed={counter === 100}
        status={{ text: 'complete', color: 'red' }}
        pauseDownload={playPauseDownload}
        startDownload={playPauseDownload}
      />
    </div>
  );
};

export default App;
//
