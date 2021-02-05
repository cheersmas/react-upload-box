import './App.css';

import type { FC } from 'react';
import React from 'react';

import { ReactDownload } from '../react-component';

const App: FC = () => (
  <div className="outer-container">
    <ReactDownload
      fileName="somtehing"
      percentage={10}
      paused={false}
      status={{ text: 'complete', color: 'red' }}
      pauseDownload={() => {
        console.log('paused');
      }}
    />
  </div>
);

export default App;
//
