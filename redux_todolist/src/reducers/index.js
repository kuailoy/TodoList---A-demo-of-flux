import { combineReducers } from 'redux';
import todoReducers from 'reducers/todoReducers';
import visibilityReducers from './visibilityReducers';

export default combineReducers({
  todos: todoReducers,
  visibility: visibilityReducers
});