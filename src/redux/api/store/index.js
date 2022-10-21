import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import userLocationSlice from "../../reduicers/location";
import openDialog from "../../reduicers/openDialog";

import { authApi } from "../auth";
import { locationApi } from "../locationApi";
export const store = configureStore({
  reducer: {
    openDialog: openDialog,
    userLocation: userLocationSlice,
    [authApi.reducerPath]: authApi.reducer,
    [locationApi.reducerPath]: locationApi.reducer,
  },
});
setupListeners(store.dispatch);
