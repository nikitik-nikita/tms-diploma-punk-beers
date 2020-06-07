import { handleActions } from 'redux-actions';

// Actions
import { addToFavourite, removeFromFavourite } from 'actions';

// Constants
import { favourite } from 'constants/defaultState';

const defaultPayLoad = { beerId: '' };

export default {
  favourite: handleActions({
    [addToFavourite]: (state, { payload = defaultPayLoad }) => {
      const newState = { ...state, beerIds: [...state.beerIds] };

      newState.beerIds.push(payload.beerId);

      return newState;
    },
    [removeFromFavourite]: (state, { payload = defaultPayLoad }) => {
      const newState = { ...state, beerIds: [...state.beerIds] };

      newState.beerIds = newState.beerIds.filter((beerId) => beerId !== payload.beerId);

      return newState;
    },
  }, favourite),
};
