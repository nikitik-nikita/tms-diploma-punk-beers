import {
  put, call, all, takeLatest, select, delay,
} from 'redux-saga/effects';

// Actions
import {
  startLoader,
  addBeers,
  endLoader,
  getBeers,
  showMoreBeers,
} from 'actions';

// Constants
import { beersUrl } from 'constants/urls';

// helpers
import { serverGet } from 'helpers/requests';

export function* getBeersSaga() {
  try {
    const currentBeers = yield select((state) => state.beers.current);

    if (!currentBeers.length) {
      yield put(startLoader());
      yield delay(4000);

      const beers = call(serverGet, beersUrl());

      // console.log(beers);
      yield put(addBeers(beers));
      yield put(endLoader());
    }
  } catch (err) {
    console.error(err.message);
    yield put(endLoader());
  }
}

export function* getMoreBeersSaga({ payload }) {
  try {
    yield put(startLoader());
    const currentBeers = yield select((state) => state.beers.current);

    const beers = yield call(serverGet, beersUrl(payload));

    yield put(addBeers([...currentBeers, ...beers]));
    yield put(endLoader());
  } catch (err) {
    console.error(err.message);
    yield put(endLoader());
  }
}

export default function* beers() {
  yield all([
    takeLatest(getBeers.toString(), getBeersSaga),
    takeLatest(showMoreBeers.toString(), getMoreBeersSaga),
  ]);
}
