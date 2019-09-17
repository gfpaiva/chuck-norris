import { createActions } from 'redux-actions';
import SET_LOADING from './constants';

export default createActions({
  [SET_LOADING]: (loading = false) => ({ loading }),
});
