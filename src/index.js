import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { Provider } from "react-redux";

import { all } from "redux-saga/effects";

import { BrowserRouter } from "react-router-dom";

import { watchSendMobileOtp } from "./sagas/sendMobileOtp";
import { watchVerifyOtp } from "./sagas/verifyOtp";
import { watchSendEmailOtp } from "./sagas/sendEmailOtp";
import { watchAddDetailsUser } from "./sagas/addDetails";
import { watchAddAddress } from "./sagas/addAddress";
import { watchAppProcess } from "./sagas/appProcessSaga";
import { watchAddProperty } from "./sagas/addPropertySaga";
import { persistor, sagaMiddleware, store } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { watchProperties } from "./sagas/landlordProps";
// import { watchApiCall } from "./sagas/apiCallSaga";

function* rootSaga() {
  yield all([
    // watchApiCall(),
    watchSendMobileOtp(),
    watchVerifyOtp(),
    watchSendEmailOtp(),
    watchAddDetailsUser(),
    watchAddAddress(),
    watchAppProcess(),
    watchAddProperty(),
    watchProperties(),
  ]);
}

// create the saga middleware
// const sagaMiddleware = createSagaMiddleware();

// create a redux store with our reducer above and middleware
// let store = createStore(RootReducer, compose(applyMiddleware(sagaMiddleware)));

// run the saga
sagaMiddleware.run(rootSaga);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
