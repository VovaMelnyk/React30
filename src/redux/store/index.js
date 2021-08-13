import { createStore, applyMiddleware } from "redux";
// import {
//   devToolsEnhancer,
//   composeWithDevTools,
// } from "redux-devtools-extension";
import { ownLogger } from "../middlewares/logger";
// import { rootReducer } from "../reducers";
import thunk from "redux-thunk";

import { configureStore } from "@reduxjs/toolkit";
import todo from "../slices/todo";
// const store = createStore(
//   rootReducer,
//   composeWithDevTools(applyMiddleware(ownLogger, thunk))
// );

const rootReducer = {
  todo,
};

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== "production",
  //   middleware: [ownLogger, thunk],
});

export default store;
