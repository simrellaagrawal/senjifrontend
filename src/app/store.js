import { configureStore } from "@reduxjs/toolkit";
import LOGIN from "../features/counter/counterSlice";

export const store = configureStore({
  reducer: {
    login: LOGIN,
  },
});
