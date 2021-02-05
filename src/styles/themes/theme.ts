import type { DefaultTheme } from 'styled-components';

// https://colorhunt.co/palette/105443
export const lightTheme: DefaultTheme = {
  primary: '#f6f6f6',
  secondary: '#ebebeb',
  accent: '#3A3B4A',
  components: {
    primary: '#f6f6f6',
    secondary: '#ffbb91',
    accent: '#515070',
    error: '#e43f5a',
    interactive: '#1f3c88',
    warning: '#1b1b2f',
    disabled: '#cdc9c3',
    borderColor: '#3f434a',
    input: {
      labelBackgroundColor: '#e5e5e5',
      backgroundColor: '#fff',
      textColor: '#000'
    }
  },
  text: {
    primary: '#373a40',
    secondary: '#686d76',
    error: '#e43f5a',
    interactive: '#fff',
    warning: '#1b1b2f',
    disabled: '#eeeeee'
  }
};

// https://colorhunt.co/palette/181367
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
