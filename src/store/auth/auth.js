import { createSlice } from "@reduxjs/toolkit";
import { getFromLocalStorage, setLocalStorage } from "../../helpers/utils";

const initialState = getFromLocalStorage("authState") || {
  loginPop: false,
  signupPop: false,
  loggedIn: {
    state: false,
    token: "",
  },
};

const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    setLoginPop(state, action) {
      state.loginPop = action.payload;
    },
    SetSignupPop(state, action) {
      state.signupPop = action.payload;
    },
    setLoggedIn(state, action) {
      state.signupPop = false;
      state.loginPop = false;
      state.loggedIn = action.payload;

      setLocalStorage("authState", state);
    },
  },
});

export const authSliceActions = authSlice.actions;

export default authSlice;
