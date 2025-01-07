import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  heroes: [],
  heroesLoadingStatus: "idle",
};

const heroesSlice = createSlice({
  name: "heroes",
  initialState,
  reducers: {
    heroesFetched: (state, action) => {
      state.heroesLoadingStatus = "idle";
      state.heroes = action.payload;
    },
    heroesFetching: (state) => {
      state.heroesLoadingStatus = "loading";
    },
    heroesFetchingError: (state) => {
      state.heroesLoadingStatus = "error";
    },
    heroCreated: (state, action) => {
      state.heroes.push(action.payload);
    },
    heroDeleted: (state, action) => {
      state.heroes = state.heroes.filter((item) => item.id !== action.payload);
    },
  },
});

const { actions, reducer } = heroesSlice;

export default reducer;
export const {
  heroesFetched,
  heroesFetching,
  heroesFetchingError,
  heroCreated,
  heroDeleted,
} = actions;
