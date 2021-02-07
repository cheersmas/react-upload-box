import type { DefaultTheme } from 'styled-components';

export interface UploadBoxProps {
  completed?: boolean;
  disabled?: boolean;
  fileName: string;
  onPause?: () => void;
  onStart?: () => void;
  paused: boolean;
  percentage: number;
  strokeHeight?: number | string;
  strokeWidth?: number;
}
export interface ReactUploadProps extends UploadBoxProps {
  theme?: DefaultTheme;
  mode?: 'light' | 'dark';
}
