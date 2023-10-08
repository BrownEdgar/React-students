import { configureStore } from '@reduxjs/toolkit';
<<<<<<< HEAD
import usersReducer from '../features/usersSlice';
import counterReducer from '../features/counterSlice';
import productsReducer from '../features/productsSlice';

const store = configureStore({
  reducer: {
    users: usersReducer,
    counter: counterReducer,
    products:productsReducer
=======
import ProductReducer from '../features/ProductSlice';

const store = configureStore({
  reducer: {
    products: ProductReducer
>>>>>>> 8c636b5470c73a663a787351e333b242ed533d7a
  }
})

export default store;