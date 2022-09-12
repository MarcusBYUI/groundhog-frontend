import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  message: "",
  pushMessage: "",
};

const notificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {
    setMessage(state, action) {
      state.message = action.payload;
    },
    setPushMessage(state, action) {
      state.pushMessage = action.payload;
    },
  },
});

export const notificationActions = notificationSlice.actions;

export default notificationSlice;
