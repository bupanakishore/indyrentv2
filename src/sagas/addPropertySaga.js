import { takeLatest, call, put } from "redux-saga/effects";
import { addNewProperty } from "../api/onboarding/apis";

// watches for actions dispatched to the store, starts worker saga
export function* watchAddProperty() {
  yield takeLatest("ADD_PROPERTY_REQUEST", addProperty);
}

// makes the api call when watcher saga sees the action
function* addProperty(action) {
  try {
    const response = yield call(addNewProperty,action.payload.data);
    const data = response.data;
    console.log(data,"data");

    // dispatch a success action to the store with the new dog
    yield put({ type: "ADD_PROPERTY_SUCCESS", data });
  
  } catch (error) {
    // dispatch a failure action to the store with the error
    yield put({ type: "ADD_PROPERTY_FAILURE", error });
  }
}

