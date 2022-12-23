import { takeLatest, call, put } from "redux-saga/effects";

// watches for actions dispatched to the store, starts worker saga
export function* watchApiCall() {
  yield takeLatest("API_CALL_REQUEST", makeApiCall);
}

// makes the api call when watcher saga sees the action
function* makeApiCall(action) {
  try {
    const response = yield call(action.handler,action.data);
    const data = response.data;
    console.log(data,"data");

    // dispatch a success action to the store with the new dog
    yield put({ type: "API_CALL_SUCCESS", data });
  
  } catch (error) {
    // dispatch a failure action to the store with the error
    yield put({ type: "API_CALL_FAILURE", error });
  }
}

