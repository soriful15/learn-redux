import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
interface CounterState {
  count: number;
}

const initialState: CounterState = {
  count: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.count = state.count + 1;
    },
    decrement: (state) => {
      state.count = state.count - 1;
    },
    // IncrementByValue: (state, action:PayloadAction<number>) => {
    IncrementByValue: (state, action: PayloadAction<{ value: number }>) => {
      // state.count = state.count + action.payload;
      state.count = state.count + action.payload.value;
    },
  },
});

export const { increment, decrement, IncrementByValue } = counterSlice.actions;

export default counterSlice.reducer;
