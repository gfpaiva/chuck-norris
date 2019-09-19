import { handleActions } from 'redux-actions';

import CategoriesActions from './actions';

export const INITIAL_STATE = {
  categories: [],
  error: false,
};

export default handleActions(
  {
    [CategoriesActions.loadCategoriesFail]: state => ({
      ...state,
      categories: [],
      error: true,
    }),

    [CategoriesActions.loadCategoriesSuccess]: (state, action) => ({
      ...state,
      categories: action.payload.data,
      error: false,
    }),
  },

  INITIAL_STATE,
);
