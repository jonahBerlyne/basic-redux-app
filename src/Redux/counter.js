import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
 name: "counter",
 initialState: {
  count: 0
 },
 reducers: {
  increment: state => {
   state.count += 1;
  },
  decrement: state => {
   state.count -= 1;
  },
  incrementByAmount: (state, action) => {
   // payload allows me to pass in any value (of any type) that I want
   state.count += action.payload;
   console.log(action.payload); // outputs what I'm passing in
  }
 }
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;