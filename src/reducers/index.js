import { combineReducers } from "redux";
import ChartReducer from "./chart";

export default combineReducers({
  chart: ChartReducer,
});
