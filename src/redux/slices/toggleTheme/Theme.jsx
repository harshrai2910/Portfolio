import { createSlice } from "@reduxjs/toolkit";

export const Theme = createSlice({
  name: "theme",
  initialState: true,
  reducers: {
    changeTheme: (state) => !state,
  },
});

export const { changeTheme } = Theme.actions;
export default Theme.reducer;
