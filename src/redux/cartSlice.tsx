import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

interface CartItem {
  id: string;
  categoryName: string;
  categoryTitle: string;
  title: string;
  imageUrl: string;
  price: number;
  quantity: number;
}

interface CartState {
  cart: CartItem[];
  total: number;
}

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
    total: 0,
  } as CartState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const itemInCart = state.cart.find(
        (item) => item.id === action.payload.id
      );
      if (itemInCart) {
        itemInCart.quantity++;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
      state.total += action.payload.price;
    },

    removeItem: (state, action: PayloadAction<string>) => {
      const removeItem = state.cart.filter(
        (item) => item.id !== action.payload
      );
      state.cart = removeItem;
      state.total = 0;
    },
    allRemoveItem: (state) => {
      state.cart = [];
      state.total = 0;
    },
  },
});

export const { addToCart, removeItem, allRemoveItem } = cartSlice.actions;

export const selectCount = (state: RootState) => state.cartSlice;

export default cartSlice.reducer;
