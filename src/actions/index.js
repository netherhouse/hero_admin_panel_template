import {
  heroesFetching,
  heroesFetched,
  heroesFetchingError,
} from "../components/heroesList/heroesSlice";

export const fetchHeroes = (request) => (dispatch) => {
  dispatch(heroesFetching());
  request("http://localhost:3001/heroes")
    .then((data) => dispatch(heroesFetched(data)))
    .catch(() => dispatch(heroesFetchingError()));
};

export const fetchFilters = (request) => (dispatch) => {
  dispatch(filterFetching());
  request("http://localhost:3001/filters")
    .then((data) => dispatch(filterFetched(data)))
    .catch(() => dispatch(filterFetchingError()));
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
// export const activeFilterChanged = (filters) => (dispatch) => {
//   setTimeout(() => {
//     dispatch({
//       type: "ACTIVE_FILTER_CHANGED",
//       payload: filters,
//     });
//   }, 500);
// };
