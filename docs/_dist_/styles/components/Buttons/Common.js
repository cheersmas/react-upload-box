export const hoverTransition = "transition: all .1s ease";
export const sharedBehaviour = (fill) => `
  height: 16px;
  width: 16px;
  fill: ${fill};
  opacity: 0.5;
  ${hoverTransition};
  &:hover {
    cursor: pointer;
    fill: ${fill};
    opacity: 1;
  }
`;
