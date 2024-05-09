import { createSlice } from "@reduxjs/toolkit";
import { AppState } from "./store";
import { HYDRATE } from "next-redux-wrapper";

export enum Languages {
  pl = "pl",
}

export interface ConfigState {
  lang: Languages;
}

const initialState: ConfigState = {
  lang: Languages.pl,
};

export const configSlice = createSlice({
  name: "config",
  initialState,
  reducers: {
    setLanguageState(state, action) {
      state.lang = action.payload;
    },
  },
});

export const { setLanguageState } = configSlice.actions;

export const selectLanguageState = (state: AppState) => state.config.lang;

export default configSlice.reducer;
