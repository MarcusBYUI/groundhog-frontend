import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth/auth";
import connectionSlice from "./connection/connection";
import notificationSlice from "./notification/notification";

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    connection: connectionSlice.reducer,
    notification: notificationSlice.reducer,
  },
});

export default store;
