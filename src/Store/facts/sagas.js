import { call, put } from 'redux-saga/effects';

import { getJoke } from '../../Utils/API';

import AppActions from '../app/actions';
import FactsActions from './actions';

export default function* loadFacts(action) {
  yield put(AppActions.setLoading(true));

  try {
    const { value } = yield call(getJoke, action.payload.category);
    yield put(FactsActions.loadFactsSuccess(value));
  } catch (err) {
    yield put(FactsActions.loadFactsFail());
  } finally {
    yield put(AppActions.setLoading(false));
  }
}
