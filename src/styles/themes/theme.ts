import type { DefaultTheme } from 'styled-components';

export const lightTheme: DefaultTheme = {
  box: {
    backgroundColor: '#f6f6f6',
    overlay: '#01c5c4'
  },
  overlayColor: {
    paused: 'blue',
    running: 'red',
    completed: 'orange'
  },
  line: {
    paused: 'red',
    running: 'blue',
    completed: 'green'
  },
  text: {
    fileName: '#fff',
    percentage: '#1e222d'
  },
  ellipsisMenu: {
    backgroundColor: '#cdc9c3'
  },
  icons: {
    completed: 'green',
    disabled: 'gray',
    paused: 'black',
    running: 'yellow'
  }
};

export const darkTheme: DefaultTheme = {
  primary: '#3D4042',
  secondary: '#363A3C',
  accent: '#FFFFFF',
  components: {
    primary: '#1e222d',
    secondary: '#1d1e27',
    accent: '#01c5c4',
    error: '#e43f5a',
    interactive: '#1f3c88',
    warning: '#1b1b2f',
    disabled: '#cdc9c3',
    borderColor: '#3f434a',
    input: {
      labelBackgroundColor: '#2a2d2f',
      backgroundColor: '#2f3335',
      textColor: '#FFF'
    }
  },
  text: {
    primary: '#FFFFFF',
    secondary: '#B0BEC5',
    error: '#e43f5a',
    interactive: '#1f3c88',
    warning: '#1b1b2f',
    disabled: '#cdc9c3'
  },
  logos: {
    selected: '#7469D9',
    hovered: '',
    highlighted: ''
  }
};
