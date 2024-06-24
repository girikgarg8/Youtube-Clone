import { combineReducers, configureStore } from "@reduxjs/toolkit";

import appReducer from "../slice/appSlice";

const reducer = combineReducers({
  app: appReducer,
});

const store = configureStore({
  reducer,
});

export default store;
