import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: false,
  admin: false,
};

export const counterSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
      state.admin = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { login } = counterSlice.actions;

export default counterSlice.reducer;
