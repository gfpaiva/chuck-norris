import { createActions } from 'redux-actions';

export default createActions({
  LOAD_CATEGORIES_REQUEST: null,
  LOAD_CATEGORIES_FAIL: null,
  LOAD_CATEGORIES_SUCCESS: (data = []) => ({ data }),
});
