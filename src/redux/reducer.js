import { OnboardingReducer } from "./reducers/OnboardingReducer";
import { PostDetailsReducer } from "./reducers/PostDetailsReducer";
import { SendOtpReducer } from "./reducers/SendOtpReducer";
import { VerifyOtpReducer } from "./reducers/VerifyOtpReducer";
import { SendEmailOtpReducer } from "./reducers/SendEmailOtpReducer";
import { AddAddressReducer } from "./reducers/AddAddressReducer";
import { ThemeReducer } from "./reducers/ThemeReducer";
import { ApplicationProcessReducer } from "./reducers/ApplicationProcessReducer";
import { AddPropertyReducer } from "./reducers/AddPropertyReducer";
import { combineReducers } from "redux";
import { LandlordProps } from "./reducers/LandlordProperties";
// const RootReducer = (state = {}, action) => {
//   return {
//     // send otp
//     sendotp: SendOtpReducer(state.sendotp, action),
//     // verify otp
//     verifyotp: VerifyOtpReducer(state.verifyotp, action),
//     // add address
//     addaddress: AddAddressReducer(state.addaddress, action),
//     // post user details
//     postdetails: PostDetailsReducer(state.postdetails, action),
//     // send otp email
//     sendotpemail: SendEmailOtpReducer(state.sendotpemail, action),

//     onboarding: OnboardingReducer(state.onboarding, action),

//     theme: ThemeReducer(state.theme, action),

//     app: ApplicationProcessReducer(state.app, action),

//     addProperty: AddPropertyReducer(state.addProperty, action),
//   };
// };

const RootReducer = combineReducers({
  // send otp
  sendotp: SendOtpReducer,
  // verify otp
  verifyotp: VerifyOtpReducer,
  // add address
  addaddress: AddAddressReducer,
  // post user details
  postdetails: PostDetailsReducer,
  // send otp email
  sendotpemail: SendEmailOtpReducer,

  onboarding: OnboardingReducer,

  theme: ThemeReducer,

  app: ApplicationProcessReducer,

  addProperty: AddPropertyReducer,

  properties: LandlordProps,
});

export default RootReducer;
