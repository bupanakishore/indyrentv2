import { takeLatest, call, put } from "redux-saga/effects";
import { createNewUser, sendOtp } from "../api/onboarding/apis";

// watches for actions dispatched to the store, starts worker saga
export function* watchSendMobileOtp() {
  yield takeLatest("SEND_MOBILE_OTP_REQUEST", sendMobileOtp);
}

// makes the api call when watcher saga sees the action
function* sendMobileOtp(action) {
  let id;
  try {
    // create new user
    const res = yield call(createNewUser, action.payload.data);
    id = res.data.data.id;
    console.log(id, "Created new user");
    // dispatch a success action to the store with the new dog
    yield put({ type: "CREATE_NEW_USER_SUCCESS", payload: id });
  } catch (error) {
    yield put({ type: "CREATE_NEW_USER_FAILURE", error });
  }
  try {
    let payload = {
      phone: action.payload.data.phone,
      userId: id,
      role: action.payload.data.role,
    };
    const response = yield call(sendOtp, payload);
    const data = response.data;
    console.log(data, "data");

    // dispatch a success action to the store with the new dog
    yield put({ type: "SEND_MOBILE_OTP_SUCCESS", data });
  } catch (error) {
    // dispatch a failure action to the store with the error
    yield put({ type: "SEND_MOBILE_OTP_FAILURE", error });
  }
}
