// import { createStore } from "redux";
// import { devToolsEnhancer } from "redux-devtools-extension";
// import { rootReducer } from "../reducers";

import { configureStore } from "@reduxjs/toolkit";
import todo from "../slices/todo";
// const store = createStore(rootReducer, devToolsEnhancer());

const rootReducer = {
  todo,
};

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
