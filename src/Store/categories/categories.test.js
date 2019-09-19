import { call, put } from 'redux-saga/effects';

import getCategoriesMock from '../../../__mocks__/getCategories';

import AppActions from '../app/actions';
import { getCategories } from '../../Utils/API';

import reducer, { INITIAL_STATE } from './';
import CategoryActions from './actions';
import {
  LOAD_CATEGORIES_REQUEST,
  LOAD_CATEGORIES_FAIL,
  LOAD_CATEGORIES_SUCCESS,
} from './constants';
import loadCategories from './sagas';

describe('[REDUX] - Categories', () => {
  it('should return correct action creators', () => {
    expect(CategoryActions.loadCategoriesRequest()).toMatchObject({ type: LOAD_CATEGORIES_REQUEST });
    expect(CategoryActions.loadCategoriesFail()).toMatchObject({ type: LOAD_CATEGORIES_FAIL });
    expect(CategoryActions.loadCategoriesSuccess()).toMatchObject({ type: LOAD_CATEGORIES_SUCCESS, payload: { data: [] } });
    expect(CategoryActions.loadCategoriesSuccess(getCategoriesMock)).toMatchObject({ type: LOAD_CATEGORIES_SUCCESS, payload: { data: getCategoriesMock } });
  });

  it('should return initial state', () => {
    expect(reducer(undefined, {})).toMatchObject(INITIAL_STATE);
  });

  it(`should handle ${LOAD_CATEGORIES_FAIL}`, () => {
    const shape = {
      categories: [],
      error: true,
    };

    expect(reducer(null, CategoryActions.loadCategoriesFail())).toMatchObject(shape);
    expect(reducer({ categories: ['any'], error: false }, CategoryActions.loadCategoriesFail())).toMatchObject(shape);
  });

  it(`should handle ${LOAD_CATEGORIES_SUCCESS}`, () => {
    const shape = {
      categories: ['any'],
      error: false,
    };

    expect(reducer(null, CategoryActions.loadCategoriesSuccess(['any']))).toMatchObject(shape);
    expect(reducer({ categories: ['any'], error: true }, CategoryActions.loadCategoriesSuccess(['any']))).toMatchObject(shape);
  });

  it('should handle the saga', () => {
    const generator = loadCategories();
    // Add loading
    expect(generator.next().value).toEqual(put(AppActions.setLoading(true)));

    // Call API
    expect(generator.next().value).toEqual(call(getCategories));

    // Dispatch success
    expect(generator.next(getCategoriesMock).value).toEqual(put(CategoryActions.loadCategoriesSuccess(getCategoriesMock)));

    // Disable loading
    expect(generator.next().value).toEqual(put(AppActions.setLoading(false)));

    // Finish
    expect(generator.next().done).toBeTruthy();
  });

  it('should fail the saga', () => {
    const generator = loadCategories();
    // Add loading
    expect(generator.next().value).toEqual(put(AppActions.setLoading(true)));

    // Call API
    expect(generator.next().value).toEqual(call(getCategories));

    // Dispatch fail
    expect(generator.throw('Any error').value).toEqual(put(CategoryActions.loadCategoriesFail()));

    // Disable loading
    expect(generator.next().value).toEqual(put(AppActions.setLoading(false)));

    // Finish
    expect(generator.next().done).toBeTruthy();
  });
});
