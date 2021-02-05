import type { FC } from 'react';
import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';

import { darkTheme, lightTheme } from '../styles/themes';
import DownloadBox from './DownloadBox';

const Root: FC = ({ theme, ...rest }) => {
  const [currentTheme, setCurrentTheme] = useState(theme || darkTheme);
  return (
    <ThemeProvider theme={currentTheme}>
      <DownloadBox {...rest} />
    </ThemeProvider>
  );
};

export default Root;
