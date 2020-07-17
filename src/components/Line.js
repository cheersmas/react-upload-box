import React, {useCallback, useState} from 'react';
import {Animate} from 'react-move';
import {easeExpInOut} from 'd3-ease';

export const Line = () => {
  const [xOffset, setXOffset] = useState(0);
  const updateXOffsetForward = useCallback(() => setXOffset(prev => prev + 800), []);
  const updateXOffset = useCallback(() => setXOffset(prev => prev - 800), []);
  return (
  <svg viewBox="0 0 600 12" preserveAspectRatio="none">
    <path
      d={`M0,1 L200,1 C300,1 300,11 400,11 L600,11`}
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
    />
  </svg>)

}