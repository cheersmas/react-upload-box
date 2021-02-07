export interface CommonProps {
  onClick?: () => void;
}

export const hoverTransition = 'transition: all .1s ease';

export const sharedBehaviour = (fill?: string): string => `
  fill: ${fill};
  height: 16px;
  ${hoverTransition};

  &:hover {
    cursor: pointer;
    fill: #eef4ed;
    opacity: 1;
  }
`;
