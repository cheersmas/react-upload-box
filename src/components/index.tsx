import type { FC } from 'react';
import React from 'react';
import type { DefaultTheme } from 'styled-components';
import { ThemeProvider } from 'styled-components';

import { darkTheme, lightTheme } from '../styles/themes';
import type { DownloadBoxProps } from './DownloadBox';
import DownloadBox from './DownloadBox';

export interface RootProps {
  theme?: DefaultTheme;
  mode?: 'light' | 'dark';
}

const Root: FC<RootProps & DownloadBoxProps> = ({
  mode = 'light',
  theme,
  ...rest
}) => (
  <ThemeProvider theme={theme || (mode === 'light' ? lightTheme : darkTheme)}>
    <DownloadBox {...rest} />
  </ThemeProvider>
);

export default Root;
