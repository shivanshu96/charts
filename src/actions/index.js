import { FETCH_CHART_DATA, CHART_DATA_FAILED, STORE_CHART_DATA } from "./types";

export const fetchChartData = (data) => {
  return {
    type: FETCH_CHART_DATA,
    data,
  };
};
export const storeChartData = (data) => {
  return {
    type: STORE_CHART_DATA,
    data,
  };
};

export const apiFailed = (data) => {
  return {
    type: CHART_DATA_FAILED,
    data,
  };
};
