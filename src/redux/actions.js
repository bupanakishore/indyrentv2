import { Types } from "./types";

export const addVariable = (payload) => {
  // payload = {key:"key",value:"value"}
  return {
    type: Types.UPDATE_STATE_VARIABLE,
    payload: payload,
  };
};

export const onGiveAnswer = (payload) => {
  // payload = { total:3, current:0, ans:[] }
  return {
    type: Types.GIVE_ANSWER,
    payload: payload,
  };
};

// TODO: destructure payload here
export const changeTheme = (payload) => {
  // payload = {key:"key",value:"value"}
  return {
    type: Types.UPDATE_THEME,
    payload: payload,
  };
};

// export const apiCallAction = ({handler,data}) => {
//   return {
//     type: Types.SEND_MOBILE_OTP_REQUEST,
//     handler: handler,
//     data: data
//   };
// };

export const verifyPhoneAction = (payload) => {
  return {
    type: Types.SEND_MOBILE_OTP_REQUEST,
    payload: payload,
  };
};

export const createNewUserSuccess = (payload) => {
  return {
    type: Types.CREATE_NEW_USER_SUCCESS,
    payload: payload,
  };
};

export const verifyOtpAction = (payload) => {
  return {
    type: Types.VERIFY_OTP_REQUEST,
    payload: payload,
  };
};

// send otp email action
export const verifyEmailOtpAction = (payload) => {
  return {
    type: Types.SEND_EMAIL_OTP_REQUEST,
    payload: payload,
  };
};

// add address
export const addAddressAction = (payload) => {
  return {
    type: Types.ADD_ADDRESS_REQUEST,
    payload: payload,
  };
};

// post user details
export const postDetailsAction = (payload) => {
  return {
    type: Types.ADD_DETAILS_REQUEST,
    payload: payload,
  };
};
