import { createSlice } from '@reduxjs/toolkit'

const initialbasketValue = {
  data: []
}

const basketSlice = createSlice({
  name: 'basket',
  initialState: initialbasketValue,
  reducers: {
    addToCard: (state, action) => {
      if (!state.data.includes(action.payload.id)) {
        state.data.push(action.payload.id)
      }
    },
    deleteWithid: (state, action) => {
      return {
        data: state.data.filter(elem => elem !== action.payload.id)
      }

    }
  }
})

export const { addToCard, deleteWithid } = basketSlice.actions

export default basketSlice.reducer