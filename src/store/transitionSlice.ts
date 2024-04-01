import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface ShowTransitionState {
  transitionState: boolean;
}

const initialState: ShowTransitionState = {
  transitionState: true,
};

export const transitionSlice = createSlice({
  name: "transition",
  initialState,
  reducers: {
    SHOW_TRANSITIONS: (state, action: PayloadAction<boolean>) => {
      state.transitionState = action.payload;
    },
  },
});

export const { SHOW_TRANSITIONS } = transitionSlice.actions;
export const transitionReducer = transitionSlice.reducer;