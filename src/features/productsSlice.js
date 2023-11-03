import { createSlice } from "@reduxjs/toolkit"

const initialProductsValue = {
  data: [
    {
      id: "1",
      title: "Morning Herbal Soap",
      price: 13.80, 
      image: "https://images.pexels.com/photos/7175383/pexels-photo-7175383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      id: "1",
      title: "Reshrening Cleanser Gel",
      price: 13.80, 
      image: "https://images.pexels.com/photos/14836431/pexels-photo-14836431.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      id: "1",
      title: "Dry Bodu Oil",
      price: 17.25,
      image: "https://images.pexels.com/photos/4041235/pexels-photo-4041235.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      id: "1",
      title: "Body Repair Lotion",
      price: 17.25, 
      image: "https://images.pexels.com/photos/8054404/pexels-photo-8054404.jpeg?auto=compress&cs=tinysrgb&w=1600"
    },
  ],
}

const productsSlice = createSlice({
  name: "products",
  initialState: initialProductsValue,
  reducers: {}
})

export default productsSlice.reducer