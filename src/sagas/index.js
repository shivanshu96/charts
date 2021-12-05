import { all } from "redux-saga/effects";
import { sagaWatcher } from "./saga";

// import watchers from other files
export default function* rootSaga() {
  yield all([sagaWatcher()]);
}
