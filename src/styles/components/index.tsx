import React, { lazy } from 'react';
import type { StyledProps } from 'styled-components';

import {
  CancelButton,
  MoreButton,
  PauseButton,
  PlayButton,
  RestartButton,
  StopButton,
  UploadButton
} from './Buttons';
import StyledLineSvg from './StyledLine';

const StyledControllerWrapper = lazy(() => import('./StyledControllerWrapper'));
const StyledControls = lazy(() => import('./StyledControls'));
const StyledDownloadBox = lazy(() => import('./StyledDownloadBox'));
const StyledDownloadPercentageBox = lazy(
  () => import('./StyledDownloadPercentageBox')
);
const StyledLine = lazy(() => import('./StyledLine'));
const StyledExpansionButtons = lazy(() => import('./StyledExpansionButtons'));
export {
  CancelButton,
  MoreButton,
  PauseButton,
  PlayButton,
  RestartButton,
  StopButton,
  StyledControllerWrapper,
  StyledControls,
  StyledDownloadBox,
  StyledDownloadPercentageBox,
  StyledExpansionButtons,
  StyledLine,
  StyledLineSvg
};
