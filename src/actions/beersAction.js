import { createActions } from 'redux-actions';

export const {
  getBeers,
  setBeers,
  searchBeers,
  showMoreBeers,
} = createActions(
  'GET_BEERS',
  'SET_BEERS',
  'SEARCH_BEERS',
  'SHOW_MORE_BEERS',
);
