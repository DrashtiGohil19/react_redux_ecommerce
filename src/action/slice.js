import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'products',
  initialState: [],
  reducers: {
    increment: (state, action) => {

      // state.push(action.payload);
      // action.payload.qty = 1;
      // originalPrice = action.payload.price;

      // const item = {...action.payload, qty: 1, originalPrice: action.payload.price}
      //   state.push(item);

      const id = action.payload.id;
      const existingItem = state.find((item) => item.id === id);
      console.log(id);

      if (!existingItem) {
        const item = { ...action.payload, qty: 1, originalPrice: action.payload.price };
        state.push(item);
      }else
      {
        existingItem.qty += 1;
        existingItem.price += existingItem.originalPrice;
        alert(`Item already added to cart. Quantity = ${existingItem.qty}`)
      }
    },

    decrement: (state, action) => {
      return state = state.filter((item) => item.id !== action.payload)
    },

    increaseQuantity: (state, action) => {
      const { itemId, originalPrice } = action.payload;
      const item = state.find((item) => item.id === itemId);
      if (item) {
        item.qty += 1;
        item.price = item.price + originalPrice;
      }
    },
    decreceQuntity: (state, action) => {
      const { itemId, originalPrice } = action.payload;
      const item = state.find((item) => item.id === itemId);
      if (item && item.qty > 0) {
        item.qty -= 1;
        item.price = item.price - originalPrice;
      }
    }
  }
})

export const { increment, decrement, increaseQuantity, decreceQuntity } = counterSlice.actions

export default counterSlice.reducer