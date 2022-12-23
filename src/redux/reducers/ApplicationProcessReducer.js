import { Types } from "../types";

// reducer with initial state
const initialState = {
  // track progress in application process
  currentQuestion: null,
  options: [],
  form: null,
  loading: false,
  success: "...",
};

// globalState={
//   ...fields,
//   reducer
// }

export function ApplicationProcessReducer(state = initialState, action) {
  // const { total, current, ans } = action.payload;
  switch (action.type) {
    case Types.RESET_STATE:
      console.log(state, "RESET STATE !!!");
      return initialState;
    case Types.APPLICATION_START:
      return {
        ...state,
        loading: true,
      };
    case Types.GIVE_ANSWER:
      return {
        ...state,
        loading: true,
      };
    case Types.SET_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case Types.UPDATE_QUESTION:
      console.log("updating question");
      return {
        ...state,
        currentQuestion: action.payload.question,
        options: action.payload.options,
        form: action.payload.form || null,
        loading: false,
      };
    case Types.SUBMIT_CASE_NO:
      console.log("submit case number");
      return state;
    case Types.SUBMIT_AWARD_LETTER:
      console.log("submit award letter");
      return state;
    case Types.SUMBIT_TAX_RETURN:
      console.log("submit tax return");
      return state;
    case Types.SUMBIT_INCOME_DOCS:
      console.log("submit income");
      return state;
    case Types.SUBMIT_REASON:
      console.log("submit reason");
      return state;
    case Types.ON_COMPLETE_APPLICATION:
      return {
        ...state,
        success: action.payload.success,
      };
    default:
      return state;
  }
}
