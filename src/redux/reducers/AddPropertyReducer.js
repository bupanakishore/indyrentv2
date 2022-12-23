import { Types } from "../types";

// reducer with initial state
const initialState = {
  fetching: false,
  data: null,
  error: null,
};

// globalState={
//   ...fields,
//   reducer
// }

export function AddPropertyReducer(state = initialState, action) {
  switch (action.type) {
    case Types.RESET_STATE:
      console.log(state, "RESET STATE !!!");
      return initialState;
    case Types.ADD_PROPERTY_REQUEST:
      return { ...state, fetching: true, error: null };
    case Types.ADD_PROPERTY_SUCCESS:
      return { ...state, fetching: false, data: action.data };
    case Types.ADD_PROPERTY_FAILURE:
      return {
        ...state,
        fetching: false,
        data: null,
        error: action.error.toString(),
      };
    default:
      return state;
  }
}
