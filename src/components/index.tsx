import type { FC } from 'react';
import React from 'react';
import { ThemeProvider } from 'styled-components';

import { darkTheme, lightTheme } from '../styles/themes';
import type { RootProps, UploadBoxProps } from '../types/Configuration.types';
import UploadBox from './UploadBox';

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
