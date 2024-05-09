import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const loadAllComments = createAsyncThunk(
  "comments/loadAllComments",
  async (postId) => {
    const data = await fetch(
      `https://www.reddit.com/${postId}.json?raw_json=1`
    );
    const json = await data.json();
    return {
      postInfo: json[0].data.children[0].data,
      comments: json[1].data.children,
    };
  }
);

export const commentSlice = createSlice({
  name: "comments",
  initialState: {
    comments: {},
    isLoadingComments: false,
    hasError: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadAllComments.pending, (state) => {
        state.isLoadingComments = true;
        state.hasError = false;
      })
      .addCase(loadAllComments.rejected, (state) => {
        state.isLoadingComments = false;
        state.hasError = true;
      })
      .addCase(loadAllComments.fulfilled, (state, action) => {
        state.isLoadingComments = false;
        state.hasError = false;
        state.comments = action.payload;
      });
  },
});

export const selectAllComments = (state) => state.comments.comments;
export const isLoading = (state) => state.comments.isLoadingComments;

export default commentSlice.reducer;
