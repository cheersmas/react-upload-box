import './App.css';

import type { FC } from 'react';
import React from 'react';

import Example1 from './Example-1';
import { customTheme } from './themes/dark-theme';

const MAX_TIME = 800;
const MIN_TIME = 500;

const App: FC = () => (
  <div className="outer-container">
    <section id="example-1" className="example-set-one">
      <Example1
        mode="light"
        seed={Math.random() * (MAX_TIME - MIN_TIME) + MIN_TIME}
      />
      <Example1
        mode="dark"
        className="second"
        seed={Math.random() * (MAX_TIME - MIN_TIME) + MIN_TIME}
      />
      <Example1
        className="third"
        theme={customTheme}
        seed={Math.random() * (MAX_TIME - MIN_TIME) + MIN_TIME}
      />
    </section>
  </div>
);

export default App;
//
