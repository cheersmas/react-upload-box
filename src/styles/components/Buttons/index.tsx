import { lazy } from 'react';

const CancelButton = lazy(() => import('./StyledCancelButton'));
const MoreButton = lazy(() => import('./StyledMoreButton'));
const PlayButton = lazy(() => import('./StyledPlayButton'));
const PauseButton = lazy(() => import('./StyledPauseButton'));
const RestartButton = lazy(() => import('./StyledCancelButton'));
const UploadButton = lazy(() => import('./StyledUploadButton'));
const StopButton = lazy(() => import('./StyledStopButton'));

export {
  CancelButton,
  MoreButton,
  PauseButton,
  PlayButton,
  RestartButton,
  StopButton,
  UploadButton
};
