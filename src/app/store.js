import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import userSlice from "../features/userSlice";
import arciveSlice, { arcivePost } from "../features/arciveSlice";


const arcivePostMiddleWare = (store) => (next) => (action) =>{
  console.log(222);
  if(action.type === 'users/deletePost'){
    const posts = store.getState().users;
    const post = posts.find(elem => elem.id === action.payload.id)

    store.dispatch(arcivePost({post}))
  }
  next(action)
}
  const store = configureStore({
    reducer:{
        users:userSlice,
        arcive: arciveSlice,
    },
    middleware:(getDefaultMiddleware)=>{
      return getDefaultMiddleware().concat(arcivePostMiddleWare)
    }
  })

  export default store