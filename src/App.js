import React, {useState} from 'react';
import './App.css';
import {Animate} from 'react-move';
import {easeExpInOut} from 'd3-ease';

const Line = () => {
  const [move, setMove] = useState(true);
  const [xOffset, setXOffset] = useState(0);
  const updateMove = () => setMove(prev => !prev);
  const updateXOffsetForward = () => setXOffset(prev => prev + 100);
  const updateXOffset = () => setXOffset(prev => prev - 100);
  return (
    <div>
      <button onClick={updateMove}>Move: {move.toString()}</button>
      <button onClick={updateXOffset}>Update: {xOffset}</button>
      <button onClick={updateXOffsetForward}>UpdateForward: {xOffset}</button>
      <Animate
        show={move}
        start={{ xOffset }}
        enter={{ xOffset: [xOffset], timing: { duration: 1000, ease: easeExpInOut } }}
        update={{ xOffset: [xOffset], timing: { duration: 1000, ease: easeExpInOut }}}
      >
        {({ xOffset }) => {
          return (
          <svg viewBox="0 0 600 12" preserveAspectRatio="none">
            <path
              d={`M0,1 L${200 + xOffset},1 C${300 + xOffset},1 ${300 + xOffset},11 ${400 + xOffset},11 L600,11`}
              stroke="currentColor"
              fill="none"
            />
          </svg>)
        }}
      </Animate>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <Line />
    </div>
  );
}

export default App;
