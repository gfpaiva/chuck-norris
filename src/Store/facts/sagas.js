import { call, put } from 'redux-saga/effects';

import { getCategories } from '../../Utils/API';

import FactsActions from './actions';

export default function* load() {
  try {
    const response = yield call(getCategories);

    yield put(FactsActions.loadCategoriesSuccess(response));
  } catch (err) {
    yield put(FactsActions.loadCategoriesFail());
  }
}
