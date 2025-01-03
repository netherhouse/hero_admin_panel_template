import { createStore, combineReducers } from "redux";
import heroes from "../data/heroes";
import filters from "../data/filters";

const store = createStore(
  combineReducers({ heroes: heroes, filters: filters }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
