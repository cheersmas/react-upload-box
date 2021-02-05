export interface CommonProps {
  onClick?: () => void;
}

export interface StyledButtonProps {
  disabled?: boolean;
}

export const hoverTransition = 'transition: all .1s ease';

export const sharedBehaviour = `
  height: 16px;
  padding-right: 20px;
  fill: #8DA9C4;
  ${hoverTransition};
  &:hover {
    opacity: 1;
    fill: #EEF4ED;
    cursor: pointer;
  }
`;
