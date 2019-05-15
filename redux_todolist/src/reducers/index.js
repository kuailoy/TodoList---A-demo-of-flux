import { combineReducers } from 'redux';
import todoReducers from './todoReducers';
import visibilityReducers from './visibilityReducers';
import statusReducers from './statusReducers';

export default combineReducers({
  todos: todoReducers,
  visibility: visibilityReducers,
  status: statusReducers
});