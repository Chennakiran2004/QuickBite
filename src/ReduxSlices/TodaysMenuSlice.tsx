import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { MenuItem, Category } from "../Models/TodaysMenuModel";
import { fetchApi } from "../utils/fetchApi";
import { getCookie } from "../utils/StorageUtilites";
import getAuthHeaders from "../utils/getAuthHeaders";

interface MenuState {
  categories: Category[];
  cart: CartItem[];
  loading: boolean;
  error: string | null;
}

interface CartItem extends MenuItem {
  quantity: number;
}

const initialState: MenuState = {
  categories: [],
  cart: [],
  loading: false,
  error: null,
};

export const fetchCategories = createAsyncThunk(
  "menu/fetchCategories",
  async () => {
    const url = `${fetchApi}qb_order/get/categories/`;
    const token = getCookie();
    const headers = getAuthHeaders(token!);
    const response = await axios.get(url, { headers });
    console.log(response);
    return response.data.categories;
  }
);

const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<MenuItem>) => {
      const item = action.payload;
      const existingItem = state.cart.find(
        (cartItem) => cartItem.item_id === item.item_id
      );
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cart.push({ ...item, quantity: 1 });
      }
    },
    removeFromCart: (state, action: PayloadAction<MenuItem>) => {
      const item = action.payload;
      const existingItem = state.cart.find(
        (cartItem) => cartItem.item_id === item.item_id
      );
      if (existingItem) {
        if (existingItem.quantity > 1) {
          existingItem.quantity -= 1;
        } else {
          state.cart = state.cart.filter(
            (cartItem) => cartItem.item_id !== item.item_id
          );
        }
      }
    },
    clearCart: (state) => {
      state.cart = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.loading = false;
        state.categories = action.payload;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.loading = false;
        state.error = "Failed to load categories";
      });
  },
});

export const { addToCart, removeFromCart, clearCart } = menuSlice.actions;
export default menuSlice.reducer;
