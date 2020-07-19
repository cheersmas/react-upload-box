import React from 'react';
import {Play, Pause} from "../assets";
import {
  StyledUploadBox,
  StyledUploadPercentageBox,
  StyledControls,
  StyledPauseButton,
  StyledPlayButton, StyledStopButton, StyledMoreButton,
} from './UploadBox.styled';
import {Line} from './Line'

export const UploadBox = ({
  fileName,
  percentage,
  paused,
  stopped,
  completed,
  startUpload,
  pauseUpload,
  stopUpload,
  status
}) => {
  return (
    <StyledUploadBox {...{percentage}}>
      <StyledControls {...{percentage, status}}>
        <div className={'status'}>
          <div className={'file-name'}>{fileName}</div>
          <div className={'percentage'}>
            <span>{percentage}%</span>
            <strong><span className={'separator'}>·</span></strong>
          </div>
        </div>
        <div className={'controls'}>
          {paused || stopped || completed ?
          <StyledPlayButton onClick={startUpload} disabled={completed} /> :
          <StyledPauseButton onClick={pauseUpload} />}
          <StyledStopButton onClick={stopUpload} />
          <StyledMoreButton />
        </div>
      </StyledControls>
      <StyledUploadPercentageBox {...{paused, percentage}}>
        <Line {...{paused}} />
      </StyledUploadPercentageBox>
    </StyledUploadBox>
  )
}