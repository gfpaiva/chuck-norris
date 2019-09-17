import { all, takeLatest } from 'redux-saga/effects';

import CategoriesActions from './categories/actions';
import FactsActions from './facts/actions';

import loadCategories from './categories/sagas';
import loadFacts from './facts/sagas';

export default function* rootSaga() {
  return yield all([
    takeLatest(CategoriesActions.loadCategoriesRequest, loadCategories),
    takeLatest(FactsActions.loadFactsRequest, loadFacts),
  ]);
}
