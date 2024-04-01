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
    showTransition: (state, action: PayloadAction<boolean>) => {
      state.authState = action.payload;
    },
  },
});

export const { showTransition } = transitionSlice.actions;
export const transitionReducer = transitionSlice.reducer;