import { configureStore } from "@reduxjs/toolkit";
import postReducer from "../features/posts/postSlice";
import searchReducer from "../features/search/searchSlice";

export default configureStore({
  reducer: { posts: postReducer, search: searchReducer },
});
