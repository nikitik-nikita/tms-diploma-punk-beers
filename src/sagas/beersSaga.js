import {
  put, call, all, takeLatest, select, delay,
} from 'redux-saga/effects';

// Actions
import {
  startLoader,
  setBeers,
  endLoader,
  getBeers,
  showMoreBeers,
  searchBeers,
} from 'actions';

// Constants
import { beersUrl, beersSearchUrl } from 'constants/urls';

// helpers
import { serverGet } from 'helpers/requests';

export function* getBeersSaga() {
  try {
    const currentBeers = yield select((state) => state.beers.current);

    if (!currentBeers.length) {
      yield put(startLoader());
      yield delay(4000);

      const beers = yield call(serverGet, beersUrl());

      // console.log(beers);
      yield put(setBeers(beers));
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

    yield put(setBeers([...currentBeers, ...beers]));
    yield put(endLoader());
  } catch (err) {
    console.error(err.message);
    yield put(endLoader());
  }
}

export function* searchBeersSaga({ payload }) {
  try {
    yield put(startLoader());

    if (!payload.length) {
      const beers = yield call(serverGet, beersUrl());
      yield put(setBeers(beers));
    } else if (payload.length) {
      const foundBeers = yield call(serverGet, beersSearchUrl(payload));
      yield put(setBeers(foundBeers));
    }

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
    takeLatest(searchBeers.toString(), searchBeersSaga),
  ]);
}
