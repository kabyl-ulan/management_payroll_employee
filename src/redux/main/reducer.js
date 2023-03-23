import { createReducer } from "@reduxjs/toolkit";
import { fetchHistoryMain, fetchMain } from "./type";

const initialState = {
  main: {},
  historySalary: [],
};

export default createReducer(initialState, (builder) => {
  builder.addCase(fetchMain, (state, { payload }) => {
    return { ...state, main: payload };
  });
  builder.addCase(fetchHistoryMain, (state, { payload }) => {
    return { ...state, historySalary: payload };
  });
});
