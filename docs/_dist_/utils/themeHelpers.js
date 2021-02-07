const getColor = (theme, {paused, completed, disabled}) => {
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
