import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth/auth";
import connectionSlice from "./connection/connection";

const store = configureStore({
  reducer: { auth: authSlice.reducer, connection: connectionSlice.reducer },
});

export default store;
