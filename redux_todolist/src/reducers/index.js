import { combineReducers } from 'redux';

import todoReducers from './todoReducers';
// import visibilityReducers from './visibilityReducers';

export default combineReducers({
  todos: todoReducers,
  // visibility: visibilityReducers
});