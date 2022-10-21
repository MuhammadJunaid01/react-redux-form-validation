import { createSlice } from "@reduxjs/toolkit";

/* Creating a slice of the redux store. */
export const userLocationSlice = createSlice({
  name: "userLocationSlice",
  initialState: {
    data: {},
    weather: {},
  },
  reducers: {
    getUserLocation: (state, { payload }) => {
      state.data = payload;
    },
    getCurruentWeather: (state, { payload }) => {
      state.weather = payload;
    },
  },
});
export const { getUserLocation, getCurruentWeather } =
  userLocationSlice.actions;
export default userLocationSlice.reducer;
