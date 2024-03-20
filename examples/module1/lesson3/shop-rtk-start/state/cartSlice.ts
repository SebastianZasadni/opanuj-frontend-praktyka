import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { CartItem } from '../types/CartItem';
import { Product } from '../types/Product';

interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product | CartItem>) => {
      const cartItem = state.items.find((item) => {
        return item.id === action.payload.id;
      });
      if (cartItem) {
        state.items = state.items.map((item) =>
          item.id === action.payload.id
            ? {
                ...item,
                amount: cartItem.amount + 1,
                totalPrice: parseFloat(
                  (cartItem.totalPrice += cartItem.price).toFixed(2)
                ),
              }
            : item
        );
      } else {
        const newItem = {
          ...action.payload,
          amount: 1,
          totalPrice: action.payload.price,
        };
        state.items.push(newItem);
      }
    },
    clearCart: (state) => {
      state.items = [];
    },
    removeFromCart: (state, action) => {
      const id = action.payload;
      const cartItem = state.items.find((item) => {
        return item.id === id;
      });
      if (!cartItem) return;
      const filteredItems = state.items.filter((item) => item.id !== id);
      state.items = filteredItems;
    },
    decreaseAmount: (state, action) => {
      const id = action.payload;
      const cartItem = state.items.find((item) => {
        return item.id === id;
      });
      if (!cartItem) return;

      if (cartItem.amount <= 1) {
        removeFromCart(id);
        return;
      }

      const newCart = state.items.map((item) => {
        return item.id === id
          ? {
              ...item,
              amount: cartItem.amount - 1,
              totalPrice: parseFloat(
                (cartItem.totalPrice - cartItem.price).toFixed(2)
              ),
            }
          : item;
      });

      state.items = newCart;
    },
  },
});

export const { addToCart, clearCart, removeFromCart, decreaseAmount } =
  cartSlice.actions;

export default cartSlice.reducer;
