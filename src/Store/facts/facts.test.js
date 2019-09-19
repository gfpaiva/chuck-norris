import { call, put } from 'redux-saga/effects';

import { getJoke as getJokeMock } from '../../../__mocks__/getJoke';

import AppActions from '../app/actions';
import { getJoke } from '../../Utils/API';

import reducer, { INITIAL_STATE } from './';
import FactsActions from './actions';
import {
  LOAD_FACTS_REQUEST,
  LOAD_FACTS_SUCCESS,
  LOAD_FACTS_FAIL,
  FACTS_CLEAR,
} from './constants';
import loadFacts from './sagas';

describe('[REDUX] - Facts', () => {
  it('should return correct action creators', () => {
    expect(FactsActions.loadFactsRequest()).toMatchObject({ type: LOAD_FACTS_REQUEST });
    expect(FactsActions.loadFactsFail()).toMatchObject({ type: LOAD_FACTS_FAIL });
    expect(FactsActions.loadFactsSuccess()).toMatchObject({ type: LOAD_FACTS_SUCCESS, payload: { data: [] } });
    expect(FactsActions.loadFactsSuccess(getJokeMock)).toMatchObject({ type: LOAD_FACTS_SUCCESS, payload: { data: getJokeMock } });
    expect(FactsActions.factsClear()).toMatchObject({ type: FACTS_CLEAR });
  });

  it('should return initial state', () => {
    expect(reducer(undefined, {})).toMatchObject(INITIAL_STATE);
  });

  it(`should handle ${LOAD_FACTS_FAIL}`, () => {
    const shape = {
      fact: '',
      error: true,
    };

    expect(reducer(null, FactsActions.loadFactsFail())).toMatchObject(shape);
    expect(reducer({ fact: 'any', error: false }, FactsActions.loadFactsFail())).toMatchObject(shape);
  });

  it(`should handle ${LOAD_FACTS_SUCCESS}`, () => {
    const shape = {
      fact: 'any',
      error: false,
    };

    expect(reducer(null, FactsActions.loadFactsSuccess('any'))).toMatchObject(shape);
    expect(reducer({ categories: 'any', error: true }, FactsActions.loadFactsSuccess('any'))).toMatchObject(shape);
  });

  it('should handle the saga', () => {
    const category = 'category';
    const action = { payload: { category } }
    const generator = loadFacts(action);

    // Add loading
    expect(generator.next().value).toEqual(put(AppActions.setLoading(true)));

    // Call API
    expect(generator.next().value).toEqual(call(getJoke, category));

    // Dispatch success
    expect(generator.next(getJokeMock).value).toEqual(put(FactsActions.loadFactsSuccess(getJokeMock.value)));

    // Disable loading
    expect(generator.next().value).toEqual(put(AppActions.setLoading(false)));

    // Finish
    expect(generator.next().done).toBeTruthy();
  });

  it('should fail the saga', () => {
    const category = 'category';
    const action = { payload: { category } }
    const generator = loadFacts(action);

    // Add loading
    expect(generator.next().value).toEqual(put(AppActions.setLoading(true)));

    // Call API
    expect(generator.next().value).toEqual(call(getJoke, category));

    // Dispatch fail
    expect(generator.throw('Any error').value).toEqual(put(FactsActions.loadFactsFail()));

    // Disable loading
    expect(generator.next().value).toEqual(put(AppActions.setLoading(false)));

    // Finish
    expect(generator.next().done).toBeTruthy();
  });
});
