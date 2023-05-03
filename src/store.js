import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './action/slice';

export default configureStore({
  reducer: {
    product:counterReducer
  }
})