import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
interface CounterState {
  count: number;
  actualValue: number[];
}

const initialState: CounterState = {
  count: 0,
  actualValue: [],
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.count = state.count + 1;
      if (state.count % 5 === 0) {
        state.actualValue.push(state.count);
      }
    },
    decrement: (state) => {
      state.count = state.count - 1;
      if (state.count % 5 === 0) {
        state.actualValue.push(state.count);
      }
    },
    // IncrementByValue: (state, action:PayloadAction<number>) => {
    IncrementByValue: (state, action: PayloadAction<{ value: number }>) => {
      // state.count = state.count + action.payload;
      state.count = state.count + action.payload.value;
      if (state.count % 5 === 0) {
        state.actualValue.push(state.count);
      }
    },
  },
});

export const { increment, decrement, IncrementByValue } = counterSlice.actions;

export default counterSlice.reducer;
