import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import { configureStore } from "@reduxjs/toolkit";

import { Provider } from "react-redux";

const initialState = {
  cash: 0,
};

const reducerState = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_CASH":
      return { ...state, cash: state.cash + action.payload };
    case "GET_CASH":
      return { ...state, cash: state.cash - action.payload };
    default:
      return state;
  }
};

const store = configureStore({
  reducer: reducerState,
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
