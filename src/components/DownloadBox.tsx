/* eslint-disable max-lines */
import React from 'react';

import {
  PauseButton,
  PlayButton,
  StyledControls,
  StyledDownloadBox,
  StyledDownloadPercentageBox,
  StyledLine
} from '../styles/components';

export interface DownloadBoxProps {
  completed?: boolean;
  disabled?: boolean;
  fileName: string;
  onPause?: () => void;
  onStart?: () => void;
  paused: boolean;
  percentage: number;
  strokeHeight?: number | string;
  strokeWidth?: number;
}
const DownloadBox = ({
  completed,
  disabled,
  fileName,
  onPause,
  onStart,
  percentage,
  paused,
  strokeHeight = '25%',
  strokeWidth = 2
}: DownloadBoxProps): JSX.Element => (
  <StyledDownloadBox {...{ percentage }}>
    <StyledControls {...{ percentage }}>
      <div className="status">
        <div className="file-name">{fileName}</div>
        <div className="percentage">
          <span>{`${percentage}%`}</span>
        </div>
      </div>
      <div className="controls">
        {paused || completed ? (
          <PlayButton onClick={onStart} {...{ completed, paused, disabled }} />
        ) : (
          <PauseButton onClick={onPause} {...{ completed, paused }} />
        )}
      </div>
    </StyledControls>
    <StyledDownloadPercentageBox {...{ completed, paused, percentage }}>
      <StyledLine {...{ completed, paused, strokeHeight, strokeWidth }} />
    </StyledDownloadPercentageBox>
  </StyledDownloadBox>
);

export default DownloadBox;
