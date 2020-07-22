import React from 'react';
import {
  StyledUploadBox,
  StyledUploadPercentageBox,
  StyledControls,
  StyledPauseButton,
  StyledPlayButton,
  StyledStopButton,
  StyledMoreButton,
  StyledExpansionButtons, Some, StyledControllerWrapper, StyledCancelButton, StyledRestartButton,
} from './UploadBox.styled';
import {Line} from './Line';

export const UploadBox = ({
  fileName,
  percentage,
  paused,
  stopped,
  completed,
  startUpload,
  pauseUpload,
  stopUpload,
  resetUpload,
  status: {text, color}
}) => {
  return (
    <StyledUploadBox {...{percentage}}>
      <StyledControls {...{percentage, text, color}}>
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
          <StyledControllerWrapper>
            <StyledMoreButton />
            <StyledExpansionButtons>
              <StyledRestartButton onClick={resetUpload} />
              <StyledCancelButton onClick={stopUpload} />
            </StyledExpansionButtons>
          </StyledControllerWrapper>
        </div>
      </StyledControls>
      <StyledUploadPercentageBox {...{paused, percentage}}>
        <Line {...{paused}} />
      </StyledUploadPercentageBox>
    </StyledUploadBox>
  )
}