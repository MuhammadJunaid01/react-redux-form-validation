import { createSlice } from "@reduxjs/toolkit";
export const openDialogSlice = createSlice({
  name: "openDialogSlice",
  initialState: {
    open: true,
  },
  reducers: {
    handleOpenDialog: (state, action) => {
      state.open = action.payload;
    },
  },
});
export const { handleOpenDialog } = openDialogSlice.actions;
export default openDialogSlice.reducer;
