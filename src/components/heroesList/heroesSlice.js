import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
  createSelector,
} from "@reduxjs/toolkit";
import { initialHeroes } from "../../data/initialData";

const heroesAdapter = createEntityAdapter();

const initialState = heroesAdapter.getInitialState({
  heroesLoadingStatus: "idle",
});

export const fetchHeroes = createAsyncThunk("heroes/fetchHeroes", async () => {
  // Simply return the initial data instead of making an HTTP request
  return initialHeroes;
});

export const createHero = createAsyncThunk(
  "heroes/createHero",
  async (hero) => {
    // Return the hero object directly
    return hero;
  }
);

export const deleteHero = createAsyncThunk("heroes/deleteHero", async (id) => {
  // Return the id directly
  return id;
});

const heroesSlice = createSlice({
  name: "heroes",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchHeroes.pending, (state) => {
        state.heroesLoadingStatus = "loading";
      })
      .addCase(fetchHeroes.fulfilled, (state, action) => {
        state.heroesLoadingStatus = "idle";
        heroesAdapter.setAll(state, action.payload);
      })
      .addCase(fetchHeroes.rejected, (state) => {
        state.heroesLoadingStatus = "error";
      })
      .addCase(createHero.fulfilled, (state, action) => {
        heroesAdapter.addOne(state, action.payload);
      })
      .addCase(deleteHero.fulfilled, (state, action) => {
        heroesAdapter.removeOne(state, action.payload);
      })
      .addDefaultCase(() => {});
  },
});

const { reducer } = heroesSlice;

export default reducer;

const { selectAll } = heroesAdapter.getSelectors((state) => state.heroes);
export const filteredHeroesSelector = createSelector(
  (state) => state.filters.activeFilter,
  selectAll,
  (filter, heroes) => {
    if (filter === "all") {
      return heroes;
    } else {
      return heroes.filter((item) => item.element === filter);
    }
  }
);
