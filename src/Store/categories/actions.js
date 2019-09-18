import { createActions } from 'redux-actions';

import {
  LOAD_CATEGORIES_REQUEST,
  LOAD_CATEGORIES_FAIL,
  LOAD_CATEGORIES_SUCCESS,
} from './constants';

export default createActions({
  [LOAD_CATEGORIES_REQUEST]: null,
  [LOAD_CATEGORIES_FAIL]: null,
  [LOAD_CATEGORIES_SUCCESS]: (data = []) => ({ data }),
});
