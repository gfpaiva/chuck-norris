import { call, put } from 'redux-saga/effects';

import { getJoke } from '../../Utils/API';

import FactsActions from './actions';

export default function* loadFacts(action) {
  try {
    const { value } = yield call(getJoke, action.payload.category);

    yield put(FactsActions.loadFactsSuccess(value));
  } catch (err) {
    yield put(FactsActions.loadFactsFail());
  }
}
