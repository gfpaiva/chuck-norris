import { handleActions } from 'redux-actions';

import FactsActions from './actions';

const INITIAL_STATE = {
  categories: [],
  facts: {},
  error: false,
  loading: true,
};

export default handleActions(
  {
    [FactsActions.loadCategoriesRequest]: state => ({
      ...state,
      loading: true,
    }),

    [FactsActions.loadCategoriesFail]: state => ({
      ...state,
      categories: [],
      error: true,
      loading: false,
    }),

    [FactsActions.loadCategoriesSuccess]: (state, action) => ({
      ...state,
      categories: action.payload.data,
      error: false,
      loading: false,
    }),
  },
  INITIAL_STATE,
);
