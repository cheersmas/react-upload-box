import type { ButtonProps, StyledLineSvgProps } from '../types/Styles.types';

export interface OverlayAndLineTheme {
  paused: string;
  completed: string;
  running: string;
  disabled?: string;
}

const getColor = (
  theme: OverlayAndLineTheme,
  { paused, completed, disabled }: StyledLineSvgProps & ButtonProps
): string | undefined => {
  if (completed) {
    return theme.completed;
  }
  if (paused) {
    return theme.paused;
  }
  if (disabled) {
    return theme.disabled;
  }
  return theme.running;
};

export default getColor;
