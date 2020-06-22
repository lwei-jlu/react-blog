

import { combineReducers } from 'redux';
import counter from './counter';
import fetchapi from './fetchapi'

export default combineReducers({
  counter,
  fetchapi,
});