import { handleActions } from 'redux-actions';

// Actions
import {
  addBeers,
  searchBeers,

} from 'actions';

// Constants
import { beersState } from 'constants/defaultState';

export default {
  beers: handleActions({
    [addBeers]: (state, { payload = [] }) => ({ origin: payload, current: payload }),
    [searchBeers]: (state, { payload = '' }) => {
      const reg = new RegExp(payload.searchString, 'i');
      const newState = state.origin.filter((beer) => reg.test(beer.name));

      return { ...state, current: newState };
    },
  }, beersState),
};
