import { createSlice } from '@reduxjs/toolkit'

const initialUsersValue = [
  {
    id: 1,
    name: "Karine"
  },
  {
    id: 2,
    name: "Armen"
  },
]

const userSlice = createSlice({
  name: 'users',
  initialState: initialUsersValue,
  reducers: {
    deleteUsersById: (state, action) => {
      console.log(state)
      const x = state.filter(elem => elem)
      return x;

    }
  }
})

export const { deleteUsersById } = userSlice.actions

export default userSlice.reducer