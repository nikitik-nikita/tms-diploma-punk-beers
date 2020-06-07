import { combineReducers } from 'redux';

import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import loadReducer from 'reducers/loadReducer';
import beersReducer from 'reducers/beersReducer';
import favouriteReducer from './favouriteReducer';

const reducers = persistReducer({
  key: 'root',
  storage,
  whitelist: [
    'beers',
    'favourite',
  ],
},
combineReducers({
  ...loadReducer,
  ...beersReducer,
  ...favouriteReducer,
}));

export default reducers;
