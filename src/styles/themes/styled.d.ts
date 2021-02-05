import type { CSSObject, CSSProp } from 'styled-components';

// choose on theme as base and extend the types
// this save multiple edits for updating themes
import type { lightTheme as theme } from './theme';

declare module 'styled-components' {
  type Theme = typeof theme;
  export type DefaultTheme = Theme;
}

// fix for css not being recongized by TS
declare module 'react' {
  interface Attributes {
    css?: CSSProp | CSSObject;
  }
}
