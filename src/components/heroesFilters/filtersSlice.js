import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filters: [],
  filtersLoadingStatus: "idle",
  activeFilter: "all",
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    filtersFetched: (state, action) => {
      state.filtersLoadingStatus = "idle";
      state.filters = action.payload;
    },
    filtersFetching: (state) => {
      state.filtersLoadingStatus = "loading";
    },
    filtersFetchingError: (state) => {
      state.filtersLoadingStatus = "error";
    },
    activeFilterChanged: (state, action) => {
      state.activeFilter = action.payload;
    },
  },
});

const { actions, reducer } = filtersSlice;

export default reducer;
export const {
  filtersFetched,
  filtersFetching,
  filtersFetchingError,
  activeFilterChanged,
} = actions;
