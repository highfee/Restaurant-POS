import { createSlice } from "@reduxjs/toolkit";
import { menu } from "../../assets/constant";

const initialState = {
  currentIndex: 0,
  currentMenu: menu[0],
  active: false,
};

const submenuSlice = createSlice({
  name: "submenu",
  initialState,
  reducers: {
    setSubmenu: (state, action) => {
      state.currentIndex = action.payload;
      state.currentMenu = menu[state.currentIndex];
    },
    animate: (state) => {
      state.active = true;
    },
    unanimate: (state) => {
      state.active = false;
    },
    incrementQuantity: (state, action) => {
      state.currentMenu.items.map((data) => {
        if (data.id == action.payload.id) {
          data.quantity += 1;
        }
      });
    },
    decrementQuantity: (state, action) => {
      state.currentMenu.items.map((data) => {
        if (data.id == action.payload.id) {
          if (data.quantity == 0) return;
          data.quantity -= 1;
        }
      });
    },
  },
});

export const {
  setSubmenu,
  animate,
  unanimate,
  incrementQuantity,
  decrementQuantity,
} = submenuSlice.actions;

export default submenuSlice.reducer;
