const initialState = {
  count: 0
}

export function percentageReducer(state, action) {
  switch(action.type) {
    case 'UPDATE':
      return {count: state.count + 1};
    case 'PAUSE':
      return;
    default:
      return state;
  } 
}