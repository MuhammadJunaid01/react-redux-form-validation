import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import openDialog from "../../reduicers/openDialog";

import { authApi } from "../auth";
export const store = configureStore({
  reducer: {
    openDialog: openDialog,
    [authApi.reducerPath]: authApi.reducer,
  },
});
setupListeners(store.dispatch);
