import { CHART_DATA_FAILED, STORE_CHART_DATA } from "../actions/types";

export const INITIAL_STATE = {
  chart_data: [],
  apiFailed: "",
};

const ChartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case STORE_CHART_DATA:
      return { ...state, chart_data: action.data };
    case CHART_DATA_FAILED:
      return { ...state, apiFailed: action.data };
    default:
      return { ...state };
  }
};
export default ChartReducer;
