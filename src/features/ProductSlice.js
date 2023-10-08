import { createSlice } from '@reduxjs/toolkit'

const initialProductValue = {
  data: [
    {
      id: 1,
      brand_name: "Apple",
      product_name: "iPhone14 pro max",
      price: 1560,
      count: 1,
      quantity: 16,
      image: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/adf49d6b-77cf-48d0-9ef6-bb9c4474ad1e/air-jordan-6-retro-mens-shoes-QLGPHR.png'
    },
    {
      id: 2,
      brand_name: "Nike",
      product_name: "Air Jordan 6 Retro",
      price: 200,
      count: 1,
      quantity: 4,
      image: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/adf49d6b-77cf-48d0-9ef6-bb9c4474ad1e/air-jordan-6-retro-mens-shoes-QLGPHR.png'
    },
    {
      id: 3,
      brand_name: "Nike",
      product_name: "Air Jordan Wordmark",
      price: 120,
      count: 1,
      quantity: 21,
      image: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/223386dc-56fb-488c-b65b-6b87dc069f44/air-jordan-wordmark-mens-fleece-hoodie-LmSppR.png'
    }
  ],
  count: null,
  total: 0
}

const productSlice = createSlice({
  name: 'product',
  initialState: initialProductValue,
  reducers: {
    deleteProductById: (state, action) => {
      console.log(action)
      return {
        ...state,
        data: state.data.filter(product => product.id != action.payload.id)
      }
    },
    addCount(state) {
      state.count = state.data.length ?? 0
    },
    addProductCount(state, action) {
      const product = state.data.find(product => product.id == action.payload.id);
      product.count = parseInt(action.payload.value) || ''
    },
    getTotal(state) {

      let sum = 0;
      state.data.forEach(elem => {
        sum += parseInt(elem.count * elem.price)
      })
      return {
        ...state,
        total: sum
      }
    }
  }
})


export const { deleteProductById, addCount, addProductCount, getTotal } = productSlice.actions
export default productSlice.reducer