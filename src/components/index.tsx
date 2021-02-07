import type { FC } from 'react';
import React from 'react';
import type { DefaultTheme } from 'styled-components';
import { ThemeProvider } from 'styled-components';

import { darkTheme, lightTheme } from '../styles/themes';
import type { DownloadBoxProps } from './DownloadBox';
import DownloadBox from './DownloadBox';

const Root: FC<
  { theme?: DefaultTheme; mode?: 'light' | 'dark' } & DownloadBoxProps
> = ({ mode = 'light', theme, ...rest }) => (
  <ThemeProvider theme={theme || mode === 'light' ? lightTheme : darkTheme}>
    <DownloadBox {...rest} />
  </ThemeProvider>
);

export default Root;
