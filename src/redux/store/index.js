// import { createStore, applyMiddleware } from "redux";
// import {
//   devToolsEnhancer,
//   composeWithDevTools,
// } from "redux-devtools-extension";
// import { myMiddleware } from "../middlewares/logger";
// import { rootReducer } from "../reducers";
// import thunk from "redux-thunk";

// const middlewares = [mid1, mid2];

// const store = createStore(
//   rootReducer,
//   composeWithDevTools(applyMiddleware(myMiddleware, thunk))
// );

// toolkit
import { configureStore } from "@reduxjs/toolkit";

import todo from "../slices/todo";

const rootReducer = {
  todo,
};

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== "production",
  // middleware: [myMiddleware, thunk],
});

export default store;
