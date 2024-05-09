import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const loadSearchResults = createAsyncThunk(
  "search/loadSearchResults",
  async (term) => {
    const data = await fetch(
      `https://www.reddit.com/search.json?q=${term}&raw_json=1`
    );
    const json = await data.json();
    return json;
  }
);

export const searchSlice = createSlice({
  name: "search",
  initialState: {
    searchTerm: "",
    searchResults: [],
    isLoadingResults: false,
    hasError: false,
  },
  reducers: {
    setSearchTerm: (state, action) => void (state.searchTerm = action.payload),
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadSearchResults.pending, (state) => {
        state.isLoadingResults = true;
        state.hasError = false;
      })
      .addCase(loadSearchResults.rejected, (state) => {
        state.hasError = true;
        state.isLoadingResults = false;
      })
      .addCase(loadSearchResults.fulfilled, (state, action) => {
        state.isLoadingResults = false;
        state.hasError = false;
        state.searchResults = action.payload;
      });
  },
});

export const { setSearchTerm, clearSearchTerm } = searchSlice.actions;
export const selectSearchResults = (state) => state.search.searchResults;
export const isLoadingResults = (state) => state.search.isLoadingResults;
export const selectSearchTerm = (state) => state.search.searchTerm;

export default searchSlice.reducer;
