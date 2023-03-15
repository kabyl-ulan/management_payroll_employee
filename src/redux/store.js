import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

import employee from "./employee/reducer";
import main from "./main/reducer";

export const store = configureStore({
  reducer: {
    employee,
    main,
  },
});

export const useAppDispatch = () => useDispatch();
