import { handleActions } from 'redux-actions';

import FactsActions from './actions';

export const INITIAL_STATE = {
  fact: '',
  error: false,
};

export default handleActions(
  {
    [FactsActions.loadFactsFail]: state => ({
      ...state,
      fact: '',
      error: true,
    }),

    [FactsActions.loadFactsSuccess]: (state, action) => ({
      ...state,
      fact: action.payload.data,
      error: false,
    }),

    [FactsActions.factsClear]: state => ({
      ...state,
      fact: '',
      error: false,
    }),
  },

  INITIAL_STATE,
);
