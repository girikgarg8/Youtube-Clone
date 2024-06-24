import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    isSidebarOpen: true,
  },
  reducers: {
    toggleIsSidebarOpen: (state, action) => {
      state.isSidebarOpen = !state.isSidebarOpen;
    },
  },
});

export const { toggleIsSidebarOpen } = appSlice.actions;

export default appSlice.reducer;
