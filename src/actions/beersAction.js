import { createActions } from 'redux-actions';

export const {
  addBeers,
  getBeers,
  searchBeers,
  showMoreBeers,
} = createActions(
  'ADD_BEERS',
  'GET_BEERS',
  'SEARCH_BEERS',
  'SHOW_MORE_BEERS',
);
