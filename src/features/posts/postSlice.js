import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const loadAllPosts = createAsyncThunk("posts/loadAllPosts", async () => {
  const data = await fetch("https://www.reddit.com/r/popular.json");
  const json = await data.json();
  return json.data.children;
});

export const postSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
    isLoadingPosts: false,
    hasError: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadAllPosts.pending, (state) => {
        state.isLoadingPosts = true;
        state.hasError = false;
      })
      .addCase(loadAllPosts.fulfilled, (state, action) => {
        state.hasError = false;
        state.isLoadingPosts = false;
        state.posts = action.payload;
      })
      .addCase(loadAllPosts.rejected, (state) => {
        state.hasError = true;
        state.isLoadingPosts = false;
      });
  },
});

export const selectAllPosts = (state) => state.posts.posts;
export const isLoading = (state) => state.posts.isLoadingPosts;

export default postSlice.reducer;
