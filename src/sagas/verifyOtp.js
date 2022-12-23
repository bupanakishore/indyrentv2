import { takeLatest, call, put } from "redux-saga/effects";
import { checkOtp } from "../api/onboarding/apis";

// watches for actions dispatched to the store, starts worker saga
export function* watchVerifyOtp() {
  yield takeLatest("VERIFY_OTP_REQUEST", verifyOtp);
}

// makes the api call when watcher saga sees the action
function* verifyOtp(action) {
  try {
    const response = yield call(checkOtp,action.payload.data);
    const data = response.data;
    console.log(data,"data");

    // dispatch a success action to the store with the new dog
    yield put({ type: "VERIFY_OTP_SUCCESS", data });
  
  } catch (error) {
    // dispatch a failure action to the store with the error
    yield put({ type: "VERIFY_OTP_FAILURE", error });
  }
}

