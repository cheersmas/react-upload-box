import {Status, ActionConstants} from '../constants';

export const initialState = {
  percentage: 10,
  status: Status.STOPPED
}

export function percentageReducer(state  = initialState, action) {
  switch(action.type) {
    case ActionConstants.START_UPLOAD:
      return {...state, status: Status.RUNNING}
    case ActionConstants.PAUSE_UPLOAD:
      return {...state, status: Status.PAUSED}
    case ActionConstants.STOP_UPLOAD:
      return {...state, status: Status.STOPPED, percentage: 0}
    case ActionConstants.RESET_UPLOAD:
      return {...state, status: Status.STOPPED, percentage: 0}
    case ActionConstants.UPDATE_PERCENTAGE:
      return {...state, percentage: state.percentage + 1}
    default:
      return state;
  } 
}