import {Status, ActionConstants} from '../constants';

export const initialState = {
  percentage: 0,
  status: Status.RUNNING
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
      return {...state, status: Status.RUNNING, percentage: 0}
    case ActionConstants.UPDATE_PERCENTAGE:
      return {...state, percentage: state.percentage + 1}
    case ActionConstants.COMPLETE_UPLOAD:
      return {...state, status: Status.COMPLETED}
    default:
      return state;
  } 
}