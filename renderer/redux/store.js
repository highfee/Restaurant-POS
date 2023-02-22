import { configureStore } from "@reduxjs/toolkit";
import submenuSlice from "./slices/submenuSlice";
import orderedItems from "./slices/orderedItems";

export const store = configureStore({
  reducer: {
    submenu: submenuSlice,
    orderedItems,
  },
});
