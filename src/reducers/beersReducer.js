import { handleActions } from 'redux-actions';

// Actions
import {
  setBeers,
} from 'actions';

// Constants
import { beersState } from 'constants/defaultState';

export default {
  beers: handleActions({
    [setBeers]: (state, { payload = [] }) => (payload),
  }, beersState),
};
