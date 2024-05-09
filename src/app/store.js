import { configureStore } from "@reduxjs/toolkit";
import postReducer from "../features/posts/postSlice";
import searchReducer from "../features/search/searchSlice";
import commentReducer from "../features/comments/commentSlice";

export default configureStore({
  reducer: {
    posts: postReducer,
    search: searchReducer,
    comments: commentReducer,
  },
});
