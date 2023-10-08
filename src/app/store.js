import { configureStore } from '@reduxjs/toolkit';
import usersReducer from '../features/usersSlice';
import counterReducer from '../features/counterSlice';
import productsReducer from '../features/productsSlice';

const store = configureStore({
  reducer: {
    users: usersReducer,
    counter: counterReducer,
    products:productsReducer
  }
})

export default store;