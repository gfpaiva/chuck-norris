import { handleActions } from 'redux-actions';

import AppActions from './actions';

const INITIAL_STATE = {
  loading: true,
};

export default handleActions(
  {
    [AppActions.setLoading]: (state, action) => ({
      ...state,
      loading: action.payload.loading,
    }),
  },
  INITIAL_STATE,
);
