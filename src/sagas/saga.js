import { takeLatest, put, call } from "redux-saga/effects";
import { apiFailed, storeChartData } from "../actions";

const apiUrl =
  "https://s3-ap-southeast-1.amazonaws.com/he-public-data/chart2986176.json";
function getApi() {
  return fetch(apiUrl, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .catch((error) => {
      throw error;
    });
}
function* chartData(action) {
  try {
    const data = yield call(getApi);
    console.log(data);
    yield put(storeChartData(data));
  } catch (e) {
    yield put(apiFailed(e.message));
  }
}

export function* sagaWatcher() {
  yield takeLatest("FETCH_CHART_DATA", chartData);
}
