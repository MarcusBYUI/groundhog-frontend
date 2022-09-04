import { createSlice } from "@reduxjs/toolkit";
import { setLocalStorage, getFromLocalStorage } from "../../helpers/utils";

const initialState = getFromLocalStorage("connection") || {
  connectionState: {
    connected: false,
    address: "dgdgtdghtdg",
  },
};

const connectionSlice = createSlice({
  name: "connection",
  initialState,
  reducers: {
    setConnection(state, action) {
      state.connectionState = action.payload;
      setLocalStorage("connection", state);
    },
  },
});

export const connectionActions = connectionSlice.actions;

export default connectionSlice;
