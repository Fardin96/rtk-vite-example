import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 10,
  status: 'idle',
};

// reducers
export const counterSlice = createSlice({
  name: 'counter',
  initialState: initialState,
  reducers: {
    increment: (state) => {
      state.value++;
    },
    decrement: (state) => {
      state.value--;
    },
  },
});

export const { increment, decrement } = counterSlice.actions;

export const selectCount = (state) => state.counter.value;

export default counterSlice.reducer;
