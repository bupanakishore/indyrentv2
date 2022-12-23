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

export function AddAddressReducer(state = initialState, action) {
  switch (action.type) {
    case Types.RESET_STATE:
      console.log(state, "RESET STATE !!!");
      return initialState;
    case Types.RESET_ADDRESS:
      console.log(state, "RESET Address !!!");
      return initialState;
    case Types.ADD_ADDRESS_REQUEST:
      return { ...state, fetching: true, error: null };
    case Types.ADD_ADDRESS_SUCCESS:
      return { ...state, fetching: false, data: action.data };
    case Types.ADD_ADDRESS_FAILURE:
      console.log("failed !!! omg");
      return { ...state, fetching: false, data: null, error: action.message };
    default:
      return state;
  }
}
