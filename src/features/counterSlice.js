import { createSlice } from '@reduxjs/toolkit'

const initialCounter = 0



const CounterSlice = createSlice({
  name: "counter",
  initialState: initialCounter,
  reducers: {
    addCount: (state, action) => {
      return state + 1
    }
  }
})

export const { addCount } = CounterSlice.actions
export default CounterSlice.reducer
