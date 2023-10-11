import { configureStore } from "@reduxjs/toolkit";
import postReducer from "../features/postsSlice";

const store = configureStore({
  reducer: {
    post: postReducer,
  },
});

export default store;
    