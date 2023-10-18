import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import productsSlice from "../features/productsSlice";



  const store = configureStore({
    reducer:{
      products:productsSlice,
        // users:userSlice,
        // arcive: arciveSlice,
    }
  
  })

  export default store