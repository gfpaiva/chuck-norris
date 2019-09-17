import { combineReducers } from 'redux';

import app from './app';
import categories from './categories';
import facts from './facts';

export default combineReducers({
  app,
  categories,
  facts,
});
