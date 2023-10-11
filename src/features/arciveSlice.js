import { createSlice } from "@reduxjs/toolkit";

 const  arciveSlice= createSlice({
    name:'arcive',
    initialState:[],
    reducers:{
        arcivePost(state,action){
            state.push(action.payload)
        }
    }
 })

 export const {arcivePost} = arciveSlice.actions
 export default arciveSlice.reducer