import React from 'react'
import Dribbble from '../assets/dribbble-ball-icon.svg';
import {StyledAnnotation} from "./Annotations.styled";
import {
  Play,
  Pause,
  Stop,
  More,
} from "../assets";
import CodePen from '../assets/codepen.png';

export const Annotations = (props) => (
  <StyledAnnotation>
    <a href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect">
      <Play />
    </a>
    <a href="https://icon54.com/" title="Pixel perfect">
      <Pause />
    </a>
    <a href="https://www.flaticon.com/authors/freepik" title="Freepik">
      <Stop />
    </a>
    <a href="https://icon54.com/" title="Pixel perfect">
      <More />
    </a>
    <a href={"https://codepen.io/aaroniker/pen/QXxexJ?editors=1010"}>
      <img src={CodePen} alt={"Aaron Codepen"} height={30}/>
    </a>
    <a href={"https://dribbble.com/shots/6052541-Upload-window-interactions"}>
      <img src={Dribbble} alt={'dribbble icon'} height={30}/>
    </a>
  </StyledAnnotation>
)