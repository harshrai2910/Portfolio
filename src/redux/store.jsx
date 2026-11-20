import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./slices/toggleTheme/Theme";

export const store = configureStore({
  reducer: {
    toggle: themeReducer,
    // projects:
  },
});
