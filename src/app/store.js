import { configureStore } from '@reduxjs/toolkit';
import productsReducer from '../features/productsSlice';
// import ProductReducer from '../features/ProductSlice';

const store = configureStore({
  reducer: {
    products: productsReducer
  }
})

export default store;