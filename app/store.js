"use client";
import { configureStore } from "@reduxjs/toolkit";
import { ApiServer } from "./APIService";

export const store = configureStore({
  reducer: {
    [ApiServer.reducerPath]: ApiServer.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(ApiServer.middleware),
});
