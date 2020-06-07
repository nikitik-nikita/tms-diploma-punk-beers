import { createActions } from 'redux-actions';

export const {
  addBeers,
  getData,
  searchBeers,
} = createActions(
  'ADD_BEERS',
  'GET_DATA',
  'SEARCH_BEERS',
);
