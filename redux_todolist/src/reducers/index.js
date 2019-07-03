import { combineReducers } from 'redux';
import todoReducer from './todoReducer';
import visibilityReducer from './visibilityReducer';
import statusReducer from './statusReducer';

export default combineReducers({
  todos: todoReducer,
  visibilityFilter: visibilityReducer,
  status: statusReducer
});