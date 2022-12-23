import { PURGE, REHYDRATE } from "redux-persist";
import { Types } from "../types";

// reducer with initial state
const initialState = {
  // user fields
  role: "tenant",
  phone: null,
  name: null,
  email: null,
  address: null,
  userId: null,
};

// globalState={
//   ...fields,
//   reducer
// }

export function OnboardingReducer(state = initialState, action) {
  switch (action.type) {
    case Types.UPDATE_STATE_VARIABLE:
      return { ...state, [action.payload.key]: action.payload.value };
    case REHYDRATE:
      console.log(state, "REHYDRATE");
      return state;
    case PURGE:
      console.log(state, "PURGING !!!");
      return initialState;
    case Types.RESET_STATE:
      console.log(state, "RESET STATE !!!");
      return initialState;
    case Types.CREATE_NEW_USER_SUCCESS:
      console.log("CREATE_NEW_USER_SUCCESS", action.payload);
      return { ...state, userId: action.payload };
    default:
      return state;
  }
}
