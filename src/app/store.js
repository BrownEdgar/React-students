import { configureStore } from '@reduxjs/toolkit';
import usersReducer from '../features/usersSlice';
import counterReducer from '../features/counterSlice';

const store = configureStore({
  reducer: {
    users: usersReducer,
    counter: counterReducer,
  }
})

export default store;