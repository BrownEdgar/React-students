import { configureStore } from '@reduxjs/toolkit';
import productsReducer from '../features/productsSlice';
import basketReducer from '../features/bascetSlice';

const store = configureStore({
  reducer: {
    products: productsReducer,
    basket: basketReducer
  }
})

export default store;