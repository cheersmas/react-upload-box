/* eslint-disable max-lines */
import React from 'react';

import {
  PauseButton,
  PlayButton,
  StyledControls,
  StyledLine,
  StyledUploadBox,
  StyledUploadPercentageBox
} from '../styles/components';

export interface UploadBoxProps {
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
const UploadBox = ({
  completed,
  disabled,
  fileName,
  onPause,
  onStart,
  percentage,
  paused,
  strokeHeight = '25%',
  strokeWidth = 2,
  ...rest
}: UploadBoxProps): JSX.Element => (
  <StyledUploadBox {...{ percentage, completed, paused, ...rest }}>
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
    <StyledUploadPercentageBox {...{ completed, paused, percentage }}>
      <StyledLine {...{ completed, paused, strokeHeight, strokeWidth }} />
    </StyledUploadPercentageBox>
  </StyledUploadBox>
);

export default UploadBox;
