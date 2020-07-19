import {combineReducers} from "redux";
import {percentageReducer} from "./percentageReducer";

export default combineReducers({
  percentageStore: percentageReducer
});