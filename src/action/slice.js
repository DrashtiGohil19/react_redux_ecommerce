import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'products',
  initialState: [],
  reducers: {
    increment: (state,action) => {
      state.push(action.payload);
    },
    
    decrement: (state,action) => {
      return state = state.filter((item)=> item.id !== action.payload)
    }
  }
})

// Action creators are generated for each case reducer function
export const { increment, decrement } = counterSlice.actions

export default counterSlice.reducer