import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"


const initialUsersValue = {
    
        data:[],
        status: 'idle',
        isPending: false
    

}

export const getAsyncUsers = createAsyncThunk(
    'users/getAsyncUsers',
    async (fetchUrl) =>{
        const users = await fetch(fetchUrl);
            const data = await users.json()
            return data
    }
)
const usersSlice = createSlice({
    name: "users",
    initialState: initialUsersValue,
    reducers:{
        

    },
    extraReducers:(builder)=>{
        builder 
        .addCase(getAsyncUsers.pending, (state,action) =>{
            state.isPending = true
            state.status = 'pending'
        })
        .addCase(getAsyncUsers.fulfilled, (state,action) =>{
               return {
                isPending:false,
                status: 'success',
                data: action.payload
               } 
        })
        .addCase(getAsyncUsers.rejected, (state,action) =>{
            return {
                isPending:false,
                status: 'failure',
                data: []
               } 
        })

    }
})
export default usersSlice.reducer

