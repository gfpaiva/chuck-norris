import { all, takeLatest } from 'redux-saga/effects';

import FactsActions from './facts/actions';
import load from './facts/sagas';

export default function* rootSaga() {
  return yield all([
    takeLatest(FactsActions.loadCategoriesRequest, load),
  ]);
}
