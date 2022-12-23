import { Types } from "../types";

// reducer with initial state
const initialState = {
  fetching: false,
  // otp
  data: null,
  error: null,
};

// globalState={
//   ...fields,
//   reducer
// }

export function SendOtpReducer(state = initialState, action) {
  switch (action.type) {
    case Types.RESET_STATE:
      console.log(state, "RESET STATE !!!");
      return initialState;
    case Types.SEND_MOBILE_OTP_REQUEST:
      return { ...state, fetching: true, error: null };
    case Types.SEND_MOBILE_OTP_SUCCESS:
      return { ...state, fetching: false, data: action.data };
    case Types.SEND_MOBILE_OTP_FAILURE:
      return { ...state, fetching: false, data: null, error: action.error.toString() };
    default:
      return state;
  }
}