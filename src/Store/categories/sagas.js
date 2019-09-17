import { call, put } from 'redux-saga/effects';

import { getCategories } from '../../Utils/API';

import AppActions from '../app/actions';
import CategoriesActions from './actions';

export default function* loadCategories() {
  yield put(AppActions.setLoading(true));

  try {
    const response = yield call(getCategories);
    yield put(CategoriesActions.loadCategoriesSuccess(response));
  } catch (err) {
    yield put(CategoriesActions.loadCategoriesFail());
  } finally {
    yield put(AppActions.setLoading(false));
  }
}
