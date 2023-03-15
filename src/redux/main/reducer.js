import { createReducer } from "@reduxjs/toolkit";
import { fetchMain } from "./type";

const initialState = {
  main: {},
};

export default createReducer(initialState, (builder) => {
  builder.addCase(fetchMain, (state, { payload }) => {
    return { ...state, main: payload };
  });
});
