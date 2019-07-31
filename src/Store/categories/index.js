import { handleActions } from 'redux-actions';

import CategoriesActions from './actions';

const INITIAL_STATE = {
  categories: [],
  error: false,
  loading: true,
};

export default handleActions(
  {
    [CategoriesActions.loadCategoriesRequest]: state => ({
      ...state,
      loading: true,
    }),

    [CategoriesActions.loadCategoriesFail]: state => ({
      ...state,
      categories: [],
      error: true,
      loading: false,
    }),

    [CategoriesActions.loadCategoriesSuccess]: (state, action) => ({
      ...state,
      categories: action.payload.data,
      error: false,
      loading: false,
    }),
  },

  INITIAL_STATE,
);
