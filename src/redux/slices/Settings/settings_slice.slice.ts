import { createSlice } from "@reduxjs/toolkit";
import { getThemeLS } from "../../../utils/getThemeLS";

const initialState = {
  themeIsDark: getThemeLS(),
};
type TypeSettingInitialState = typeof initialState;

export const settingsSlice = createSlice({
  name: "settingsSlice",
  initialState: initialState,
  reducers: {
    toggleTheme: (state: TypeSettingInitialState) => {
      state.themeIsDark = !state.themeIsDark;

      return state;
    },
  },
});

export const { actions, reducer } = settingsSlice;
