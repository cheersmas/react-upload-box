import React from 'react'
import Dribbble from '../assets/dribbble-ball-icon.svg';
import {StyledAnnotation} from "./Annotations.styled";
import {
  Play,
  Pause,
  Stop,
  More
} from "../assets";

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
    <a href={"https://dribbble.com/shots/6052541-Upload-window-interactions"}>
      <img src={Dribbble} alt={'dribbble icon'} />
    </a>
  </StyledAnnotation>
)