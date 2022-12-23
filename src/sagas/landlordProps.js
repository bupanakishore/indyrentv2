import { takeLatest, call, put } from "redux-saga/effects";
import { getLandlordProperties } from "../api/onboarding/apis";

// watches for actions dispatched to the store, starts worker saga
export function* watchProperties() {
  yield takeLatest("PROPERTIES_REQUEST", getProperties);
}

// makes the api call when watcher saga sees the action
function* getProperties(action) {
  try {
    const response = yield call(getLandlordProperties,action.payload.userId);
    const data = response.data;
    console.log(data, "data");

    // dispatch a success action to the store with the new dog
    yield put({ type: "PROPERTIES_SUCCESS", data });
  } catch (error) {
    // dispatch a failure action to the store with the error
    yield put({ type: "PROPERTIES_FAILURE", error });
  }
}
