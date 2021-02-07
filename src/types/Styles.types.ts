export interface StyledLineSvgProps {
  paused: boolean;
  completed?: boolean;
  strokeWidth?: number;
  strokeHeight?: string | number;
}

export interface ButtonProps {
  disabled?: boolean;
}

export interface StyledUploadBoxProps {
  completed?: boolean;
  paused: boolean;
  percentage: number;
}

export interface CommonProps {
  onClick?: () => void;
}
