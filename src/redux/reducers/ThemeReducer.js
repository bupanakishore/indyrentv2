import { Types } from "../types";

// reducer with initial state
const initialState = {
  // colors
  primary: "violet",//emerald
  secondary: "emerald",//violet
  accent: "yellow",
  bg: "white",
};

// globalState={
//   ...fields,
//   reducer
// }

export function ThemeReducer(state = initialState, action) {
  switch (action.type) {
    case Types.RESET_STATE:
      console.log(state, "RESET STATE !!!");
      return initialState;
    case Types.UPDATE_THEME:
      return { ...state, [action.payload.key]: action.payload.value };
    default:
      return state;
  }
}
