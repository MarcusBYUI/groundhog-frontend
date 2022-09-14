import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  message: "",
  pushMessage: "",
  constractAction: false,
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
    setContractAction(state) {
      state.constractAction = !state.constractAction;
    },
  },
});

export const notificationActions = notificationSlice.actions;

export default notificationSlice;
