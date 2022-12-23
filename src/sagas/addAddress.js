import { takeLatest, call, put } from "redux-saga/effects";
import { addUSPSAddress, checkUSPSAddress } from "../api/onboarding/apis";

// watches for actions dispatched to the store, starts worker saga
export function* watchAddAddress() {
  yield takeLatest("ADD_ADDRESS_REQUEST", addAddress);
}

// makes the api call when watcher saga sees the action
function* addAddress(action) {
  // check address
  let isVerified = false;
  // try {
  const response = yield call(checkUSPSAddress, action.payload.data);
  const data = response.data;
  console.log(data, "checking address");
  isVerified = data.status;
  // } catch (error) {
  //   // dispatch a failure action to the store with the error
  //   yield put({ type: "ADD_ADDRESS_FAILURE", error });
  // }
  if (isVerified) {
    try {
      const response = yield call(addUSPSAddress, action.payload.data);
      const data = response.data;
      console.log(data, "added address");

      // dispatch a success action to the store with the new dog
      yield put({ type: "ADD_ADDRESS_SUCCESS", data });
    } catch (error) {
      // dispatch a failure action to the store with the error
      yield put({ type: "ADD_ADDRESS_FAILURE", error });
    }
  } else {
    let message = "Address Not Found";
    console.log(message);
    // dispatch a failure action to the store with the error
    yield put({ type: "ADD_ADDRESS_FAILURE", message });
  }
}
