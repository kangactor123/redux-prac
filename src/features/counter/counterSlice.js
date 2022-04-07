import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchIncrement = createAsyncThunk(
  "counter/fetchIncrement",
  async (value) => {
    const response = await axios.put("/counter/increment", { value });
    return response.data;
  }
);

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
  //비동기 통신 (createAsyncThunk : redux-toolkit)
  extraReducers: {
    [fetchIncrement.pending]: (state) => {
      state.status = "loading";
    },
    [fetchIncrement.fulfilled]: (state) => {
      state.status = "success";
    },
    [fetchIncrement.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
  },
});

// 리듀서들이 counterSlice.actions 안에 자동으로 만들어짐
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
