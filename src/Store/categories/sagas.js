import { call, put } from 'redux-saga/effects';

import { getCategories } from '../../Utils/API';

import CategoriesActions from './actions';

export default function* loadCategories() {
  try {
    const response = yield call(getCategories);

    yield put(CategoriesActions.loadCategoriesSuccess(response));
  } catch (err) {
    yield put(CategoriesActions.loadCategoriesFail());
  }
}
