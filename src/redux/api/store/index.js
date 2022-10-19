import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

import { authApi } from "../auth";
export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
  },
});
setupListeners(store.dispatch);
