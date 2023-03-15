import { createReducer } from "@reduxjs/toolkit";
import { employeeOneSuccess, subEmployeeSuccess } from "./type";

const initialState = {
  employee: [],
  employeeOne: {},
};

export default createReducer(initialState, (builder) => {
  builder.addCase(subEmployeeSuccess, (state, { payload }) => {
    return { ...state, employee: payload };
  });
  builder.addCase(employeeOneSuccess, (state, { payload }) => {
    return { ...state, employeeOne: payload };
  });
});
