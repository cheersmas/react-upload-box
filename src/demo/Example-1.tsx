import './App.css';

import type { FC } from 'react';
import React, { useEffect, useState } from 'react';
import type { DefaultTheme } from 'styled-components';

import { ReactUpload } from '../react-upload-box';

interface AppProps {
  seed?: number;
  className?: string;
  mode?: 'light' | 'dark';
  theme?: DefaultTheme;
}

const App: FC<AppProps> = ({ seed, ...rest }) => {
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
  return (
    <ReactUpload
      fileName="ubuntu-2020-1-2.dmg"
      percentage={counter}
      paused={pause}
      disabled={counter === 100}
      completed={counter === 100}
      onPause={playPauseDownload}
      onStart={playPauseDownload}
      {...rest}
    />
  );
};

export default App;
//
