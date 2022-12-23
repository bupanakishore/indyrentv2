import { takeLatest, call, put } from "redux-saga/effects";
import {
  createNewUser,
  getFirstQuestion,
  getNextQuestion,
  sendOtp,
  submitAnswer,
} from "../api/onboarding/apis";

// watches for actions dispatched to the store, starts worker saga
export function* watchAppProcess() {
  yield takeLatest(["APPLICATION_START", "GIVE_ANSWER"], startApplication);
}

// checks status of application
function* startApplication(action) {
  console.log("watching application");
  // if starting apllication
  if (action.payload === undefined) {
    try {
      // get first question
      console.log("starting application");
      const res = yield call(getFirstQuestion);
      let data = res.data;
      yield put({
        type: "UPDATE_QUESTION",
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  } else {
    // get current question and add it to state
    console.log("giving answer", action.payload);
    let { ans } = action.payload;
    // submit answer
    const submit = yield call(submitAnswer);
    // get next question
    if (ans.nextQuestionId !== null) {
      try {
        const next = yield call(getNextQuestion, ans.nextQuestionId);
        let nextData = next.data;
        yield put({
          type: "UPDATE_QUESTION",
          payload: nextData,
        });
      } catch (error) {
        console.log(error);
      }
    }
  }
  // // do something with it
  // console.log(action.payload.current, QuestionContent.length);
  // // check if last answer
  // if (action.payload.current == QuestionContent.length - 1) {
  //   // do something here to ascertain success
  //   let success = false;
  //   yield put({
  //     type: "ON_COMPLETE_APPLICATION",
  //     payload: { success: success },
  //   });
  // }
}
