import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import userLocationSlice from "../../reduicers/location";
import openDialog from "../../reduicers/openDialog";

import { authApi } from "../auth";
/* Creating a store with the reducers and middleware. */
export const store = configureStore({
  reducer: {
    openDialog: openDialog,
    userLocation: userLocationSlice,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware),
});
setupListeners(store.dispatch);
