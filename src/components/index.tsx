import type { FC } from 'react';
import React from 'react';
import { ThemeProvider } from 'styled-components';

import { darkTheme, lightTheme } from '../styles/themes';
import type { ReactUploadProps } from '../types/Configuration.types';
import UploadBox from './UploadBox';

const Root: FC<ReactUploadProps> = ({ mode = 'light', theme, ...rest }) => (
  <ThemeProvider theme={theme || (mode === 'light' ? lightTheme : darkTheme)}>
    <UploadBox {...rest} />
  </ThemeProvider>
);

export default Root;
