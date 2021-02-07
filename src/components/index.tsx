import type { FC, ReactElement, ReactHTML, ReactNode } from 'react';
import React, { useState } from 'react';
import type { DefaultTheme } from 'styled-components';
import { ThemeProvider } from 'styled-components';

import { darkTheme, lightTheme } from '../styles/themes';
import type { DownloadBoxProps } from './DownloadBox';
import DownloadBox from './DownloadBox';

const Root: FC<{ theme?: DefaultTheme } & DownloadBoxProps> = ({
  theme,
  children,
  ...rest
}) => {
  const [currentTheme, setCurrentTheme] = useState(theme || lightTheme);
  return (
    <ThemeProvider theme={currentTheme}>
      <DownloadBox {...rest} />
    </ThemeProvider>
  );
};

export default Root;
