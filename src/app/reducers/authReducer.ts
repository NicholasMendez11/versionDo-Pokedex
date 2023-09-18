import { createSlice } from "@reduxjs/toolkit";

interface AuthState {
  user: boolean;
}

const initialState: AuthState = {
  user: false,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state) => {
      state.user = true;
    },
    logout: (state) => {
    localStorage.removeItem("auth");
      state.user = false;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
