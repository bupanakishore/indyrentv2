import { takeLatest, call, put } from "redux-saga/effects";
import { checkOtp, checkOtpV2, postUserDetails } from "../api/onboarding/apis";

// watches for actions dispatched to the store, starts worker saga
export function* watchAddDetailsUser() {
  yield takeLatest("ADD_DETAILS_REQUEST", addDetailsUser);
}

// makes the api call when watcher saga sees the action
function* addDetailsUser(action) {
  try {
    // check otp
    const response = yield call(checkOtpV2, {
      user_type: action.payload.role,
      otp_type: "email",
      email: action.payload.data.email,
      otp: action.payload.otp,
    });
    const data = response.data;
    console.log(data, "validate otp");
  } catch (error) {
    // dispatch a failure action to the store with the error
    yield put({ type: "ADD_DETAILS_FAILURE", error });
  }
  try {
    const response = yield call(postUserDetails, action.payload);
    const data = response.data;
    console.log(data, "data");

    // dispatch a success action to the store with the new dog
    yield put({ type: "ADD_DETAILS_SUCCESS", data });
  } catch (error) {
    // dispatch a failure action to the store with the error
    yield put({ type: "ADD_DETAILS_FAILURE", error });
  }
}
