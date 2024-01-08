import { createSlice } from "@reduxjs/toolkit";

const appMenuSlice = createSlice({
  name: "app",
  initialState: {
    isMenuOpen: true,
  },
  reducers: {
    openAction: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    closeAction: (state) => {
      state.isMenuOpen = false;
    },
  },
});

export const { openAction, closeAction } = appMenuSlice.actions;
export default appMenuSlice.reducer;
