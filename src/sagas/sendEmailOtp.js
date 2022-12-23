import { takeLatest, call, put } from "redux-saga/effects";
import { sendOtpEmail } from "../api/onboarding/apis";

// watches for actions dispatched to the store, starts worker saga
export function* watchSendEmailOtp() {
  yield takeLatest("SEND_EMAIL_OTP_REQUEST", sendEmailOtp);
}

// makes the api call when watcher saga sees the action
function* sendEmailOtp(action) {
  try {
    const response = yield call(sendOtpEmail,action.payload.data);
    const data = response.data;
    console.log(data,"data");

    // dispatch a success action to the store with the new dog
    yield put({ type: "SEND_EMAIL_OTP_SUCCESS", data });
  
  } catch (error) {
    // dispatch a failure action to the store with the error
    yield put({ type: "SEND_EMAIL_OTP_FAILURE", error });
  }
}

