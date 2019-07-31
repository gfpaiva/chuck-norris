import { combineReducers } from 'redux';

import categories from './categories';
import facts from './facts';

export default combineReducers({
  categories,
  facts,
});
