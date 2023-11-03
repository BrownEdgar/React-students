import { configureStore} from "@reduxjs/toolkit";
import productsReducer from "../features/productsSlice";
import sweetsReducer from "../features/sweetsSlice";

const store = configureStore({
  reducer:{
    sweets:sweetsReducer
  }
})

export default store