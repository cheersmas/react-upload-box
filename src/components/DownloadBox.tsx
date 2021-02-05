/* eslint-disable max-lines */
import React, { Suspense } from 'react';

import {
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
  StyledLine
} from '../styles/components';

interface DownloadBoxProps {
  fileName: string;
  percentage: number;
  paused: boolean;
  stopped: boolean;
  completed: boolean;
  startDownload?: () => void;
  pauseDownload?: () => void;
  stopDownload?: () => void;
  resetDownload?: () => void;
  status: {
    text: string;
    color: string;
  };
}
const DownloadBox = ({
  fileName,
  percentage,
  paused,
  stopped,
  completed,
  startDownload,
  pauseDownload,
  stopDownload,
  resetDownload,
  status: { text, color }
}: DownloadBoxProps): JSX.Element => (
  <Suspense fallback={<div>Loading</div>}>
    <StyledDownloadBox {...{ percentage }}>
      <StyledControls {...{ percentage, text, color }}>
        <div className="status">
          <div className="file-name">{fileName}</div>
          <div className="percentage">
            <span>{`${percentage}%`}</span>
            <strong>
              <span className="separator">·</span>
            </strong>
          </div>
        </div>
        <div className="controls">
          {paused || stopped || completed ? (
            <PlayButton onClick={startDownload} disabled={completed} />
          ) : (
            <PauseButton onClick={pauseDownload} />
          )}
          <StyledControllerWrapper>
            <MoreButton />
            <StyledExpansionButtons>
              <RestartButton onClick={resetDownload} />
              <CancelButton onClick={stopDownload} />
            </StyledExpansionButtons>
          </StyledControllerWrapper>
        </div>
      </StyledControls>
      <StyledDownloadPercentageBox {...{ paused, percentage }}>
        <StyledLine {...{ paused }} />
      </StyledDownloadPercentageBox>
    </StyledDownloadBox>
  </Suspense>
);

DownloadBox.defaultProps = {
  startDownload: () => {
    /**/
  },
  pauseDownload: () => {
    /**/
  },
  stopDownload: () => {
    /**/
  },
  resetDownload: () => {
    /**/
  }
};
export default DownloadBox;
