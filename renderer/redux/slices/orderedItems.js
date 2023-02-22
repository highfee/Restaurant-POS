import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  orderedItems: [],
};

const orderedItemsSlice = createSlice({
  name: "orderedItem",
  initialState,
  reducers: {
    add: (state, action) => {
      let itemExist = state.orderedItems.some((data) => {
        return data.id === action.payload.id;
      });

      if (!itemExist) {
        state.orderedItems = [
          ...state.orderedItems,
          { ...action.payload, quantity: 1 },
        ];
      } else {
        state.orderedItems.map((data) => {
          if (data.id == action.payload.id) {
            data.quantity += 1;
          }
        });
      }
    },
    remove: (state, action) => {
      state.orderedItems.map((data) => {
        if (data.id === action.payload.id) {
          if (data.quantity > 0) {
            data.quantity -= 1;
          }
        }
        if (data.quantity == 0) {
          state.orderedItems = state.orderedItems.filter((item) => {
            return item.quantity != 0;
          });
        }
      });
    },
    deleteOrderItem: (state, action) => {
      state.orderedItems = state.orderedItems.filter((item) => {
        return item.id !== action.payload.id;
      });
    },
  },
});

export const { add, remove, deleteOrderItem } = orderedItemsSlice.actions;

export default orderedItemsSlice.reducer;
