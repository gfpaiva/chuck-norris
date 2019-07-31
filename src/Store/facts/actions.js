import { createActions } from 'redux-actions';

export default createActions({
  LOAD_FACTS_REQUEST: category => ({ category }),
  LOAD_FACTS_FAIL: null,
  LOAD_FACTS_SUCCESS: (data = []) => ({ data }),
});
