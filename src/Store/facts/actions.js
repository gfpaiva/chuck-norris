import { createActions } from 'redux-actions';

import {
  LOAD_FACTS_REQUEST,
  LOAD_FACTS_SUCCESS,
  LOAD_FACTS_FAIL,
  FACTS_CLEAR,
} from './constants';

export default createActions({
  [LOAD_FACTS_REQUEST]: category => ({ category }),
  [LOAD_FACTS_SUCCESS]: (data = []) => ({ data }),
  [LOAD_FACTS_FAIL]: null,
  [FACTS_CLEAR]: null,
});
