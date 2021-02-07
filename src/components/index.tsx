import type { FC } from 'react';
import React from 'react';
import type { DefaultTheme } from 'styled-components';
import { ThemeProvider } from 'styled-components';

import { darkTheme, lightTheme } from '../styles/themes';
import type { UploadBoxProps } from './UploadBox';
import UploadBox from './UploadBox';

export interface RootProps {
  theme?: DefaultTheme;
  mode?: 'light' | 'dark';
}

const Root: FC<RootProps & UploadBoxProps> = ({
  mode = 'light',
  theme,
  ...rest
}) => (
  <ThemeProvider theme={theme || (mode === 'light' ? lightTheme : darkTheme)}>
    <UploadBox {...rest} />
  </ThemeProvider>
);

export default Root;
