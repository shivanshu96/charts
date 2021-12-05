import { createSelector } from "reselect";

const allState = (state) => state.chart;

export const getChartData = createSelector(allState, (state) => {
  return state.chart_data;
});
