import { createSlice } from '@reduxjs/toolkit'

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuthenticated: false,
    admin: null,
    error: null
  },
  reducers: {
    loginSuccess(state, action) {
      state.isAuthenticated = true
      state.admin = action.payload
      state.error = null
    },
    loginFailure(state, action) {
      state.isAuthenticated = false
      state.admin = null
      state.error = action.payload
    },
    logout(state) {
      state.isAuthenticated = false
      state.admin = null
      state.error = null
    }
  }
})

export const { loginSuccess, loginFailure, logout } = authSlice.actions
export default authSlice.reducer
