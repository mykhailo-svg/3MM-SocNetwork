import { combineReducers, legacy_createStore as createStore } from "redux";

import { configureStore } from "@reduxjs/toolkit";

import { reducer as contactsReducer } from "./slices/Messages/contacts_slice.slice";
import { reducer as chatReducer } from "./slices/Messages/chat_slice.slice";

import { reducer as people_reducer } from "./slices/People/people_slice.slice";
import { reducer as profile_reducer } from "./slices/Profile/profile_slice.slice";
import { reducer as user_reducer } from "./slices/Profile/user_slice.slice";
import { reducer as settings_reducer } from "./slices/Settings/settings_slice.slice";
import { reducer as signup_reducer } from "./slices/Authorization/signup_slice.slice";

let reducers = combineReducers({
  contacts_reducer: contactsReducer,
  chat_reducer: chatReducer,
  people_reducer: people_reducer,
  profile_reducer: profile_reducer,
  user_reducer: user_reducer,
  settings_reducer: settings_reducer,
  signup_reducer: signup_reducer,
});

export const store = configureStore({
  reducer: reducers,
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
