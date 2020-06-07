import { handleActions } from 'redux-actions';

// Actions
import { startLoader, endLoader } from 'actions';

// Constants
import { loadState } from 'constants/defaultState';

export default {
  load: handleActions({
    [startLoader]: () => true,
    [endLoader]: () => false,
  }, loadState),
};
