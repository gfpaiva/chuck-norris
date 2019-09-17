import { createActions } from 'redux-actions';

export default createActions({
  SET_LOADING: (loading = false) => ({ loading }),
});
