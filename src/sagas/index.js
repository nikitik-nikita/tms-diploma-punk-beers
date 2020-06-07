import { all, fork } from 'redux-saga/effects';

import beers from 'sagas/beersSaga';

export default function* rootSaga() {
  yield all([
    fork(beers),
  ]);
}
