import React, {useState} from 'react';
import {Animate} from 'react-move';
import {easeExpInOut} from 'd3-ease';

export const Line = () => {
  const [xOffset, setXOffset] = useState(0);
  const updateXOffsetForward = () => setXOffset(prev => prev + 800);
  const updateXOffset = () => setXOffset(prev => prev - 800);
  return (
    <div>
      <button onClick={updateXOffset}>Update: {xOffset}</button>
      <button onClick={updateXOffsetForward}>UpdateForward: {xOffset}</button>
      <Animate
        start={{ xOffset }}
        enter={{ xOffset: [xOffset], timing: { duration: 2000, ease: easeExpInOut } }}
        update={{ xOffset: [xOffset], timing: { duration: 2000, ease: easeExpInOut }}}
      >
        {({ xOffset }) => {
          return (
          <svg viewBox="0 0 600 12" preserveAspectRatio="none">
            <path
              d={`M0,1 L${600 + xOffset},1 C${700 + xOffset},1 ${700 + xOffset},11 ${800 + xOffset},11 L800,11`}
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
            />
          </svg>)
        }}
      </Animate>
    </div>
  )
}