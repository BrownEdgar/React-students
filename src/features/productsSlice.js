import { createSlice } from '@reduxjs/toolkit';

const initialProductsValue = [
  {
    id: 1,
    title: "seeds",
    desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis, expedita assumenda architecto minus error id!',
    image: 'https://images.pexels.com/photos/1737079/pexels-photo-1737079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 2,
    title: "fruits",
    desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis, expedita assumenda architecto minus error id!',
    image: 'https://images.pexels.com/photos/4058752/pexels-photo-4058752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 3,
    title: "vegetables",
    desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis, expedita assumenda architecto minus error id!',
    image: 'https://images.pexels.com/photos/4203056/pexels-photo-4203056.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 4,
    title: "dairy/eggs",
    desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis, expedita assumenda architecto minus error id!',
    image: 'https://images.pexels.com/photos/4045699/pexels-photo-4045699.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  }
]

const productSlice = createSlice({
  name: 'products',
  initialState: initialProductsValue,
  reducers: {}
})

// selectors
export const gerAllProducts = state => state.products


export default productSlice.reducer