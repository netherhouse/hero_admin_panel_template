export const heroesFetching = () => {
  return {
    type: "HEROES_FETCHING",
  };
};

export const heroesFetched = (heroes) => {
  return {
    type: "HEROES_FETCHED",
    payload: heroes,
  };
};

export const heroesFetchingError = () => {
  return {
    type: "HEROES_FETCHING_ERROR",
  };
};

export const filterFetching = () => {
  return {
    type: "FILTERS_FETCHING",
  };
};
export const filterFetched = (filters) => {
  return {
    type: "FILTERS_FETCHED",
    payload: filters,
  };
};

export const filterFetchingError = () => {
  return {
    type: "FILTERS_FETCHING_ERROR",
  };
};

export const activeFilterChanged = (filters) => {
  return {
    type: "ACTIVE_FILTER_CHANGED",
    payload: filters,
  };
};

export const heroDeleted = (id) => {
  return {
    type: "HERO_DELETED",
    payload: id,
  };
};
