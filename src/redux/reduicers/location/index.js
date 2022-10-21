import { createSlice } from "@reduxjs/toolkit";

export const userLocationSlice = createSlice({
  name: "userLocationSlice",
  initialState: {
    data: {},
  },
  reducers: {
    getUserLocation: (state, { payload }) => {
      state.data = payload;
    },
  },
});
export const { getUserLocation } = userLocationSlice.actions;
export default userLocationSlice.reducer;
