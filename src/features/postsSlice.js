import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialPostValue = {
  data: [],
  status: "start",
  isPending: false,
};

export const getAsyncPost = createAsyncThunk(
  "post/getAsyncPost",
  async (postUrl) => {
    const getPost = await fetch(postUrl);
    return getPost.data;

  }
);

const postsSlice = createSlice({
  name: "post",
  initialState: initialPostValue,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(getAsyncPost.pending, (state, action) => {
        (state.status = "Pending"), (state.isPending = true);
      })
      .addCase(getAsyncPost.fulfilled, (state, action) => {
        return {
          isPending: false,
          status: "Success",
          data: action.payload,
        };
      })
      .addCase(getAsyncPost.rejected, (state, action) => {
        return {
          isPending: false,
          status: "failed",
          data: [],
        };
      });
  },
});

export default postsSlice.reducer;
