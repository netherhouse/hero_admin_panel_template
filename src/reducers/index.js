const initialState = {
  heroes: [],
  heroesLoadingStatus: "idle",
  filteredHeroues: [],
  filters: [],
  filtersLoadingStatus: "idle",
  activeFilter: "all",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "HEROES_FETCHING":
      return {
        ...state,
        heroesLoadingStatus: "loading",
      };
    case "HEROES_FETCHED":
      return {
        ...state,
        heroes: action.payload,
        filteredHeroues:
          state.activeFilter === "all"
            ? action.payload
            : action.payload.filter(
                (item) => item.class === state.activeFilter
              ),
        heroesLoadingStatus: "idle",
      };
    case "HEROES_FETCHING_ERROR":
      return {
        ...state,
        heroesLoadingStatus: "error",
      };
    case "FILTERS_FETCHING":
      return {
        ...state,
        filtersLoadingStatus: "loading",
      };
    case "FILTERS_FETCHED":
      return {
        ...state,
        filters: action.payload,
        filtersLoadingStatus: "idle",
      };
    case "FILTERS_FETCHING_ERROR":
      return {
        ...state,
        filtersLoadingStatus: "error",
      };
    case "ACTIVE_FILTER_CHANGED":
      return {
        ...state,
        activeFilter: action.payload,
        filteredHeroues:
          action.payload === "all"
            ? state.heroes
            : state.heroes.filter((item) => item.class === action.payload),
      };
    case "HERO_DELETED":
      const newHeroList = state.heroes.filter(
        (item) => item.id !== action.payload
      );
      return {
        ...state,
        heroes: newHeroList,
        filteredHeroues:
          state.activeFilter === "all"
            ? newHeroList
            : newHeroList.filter((item) => item.class === state.activeFilter),
      };
    default:
      return state;
  }
};

export default reducer;
