import { handleActions } from 'redux-actions';

import FactsActions from './actions';

const INITIAL_STATE = {
  fact: '',
  error: false,
  loading: true,
};

export default handleActions(
  {
    [FactsActions.loadFactsRequest]: state => ({
      ...state,
      loading: true,
    }),

    [FactsActions.loadFactsFail]: state => ({
      ...state,
      fact: '',
      error: true,
      loading: false,
    }),

    [FactsActions.loadFactsSuccess]: (state, action) => ({
      ...state,
      fact: action.payload.data,
      error: false,
      loading: false,
    }),
  },

  INITIAL_STATE,
);
