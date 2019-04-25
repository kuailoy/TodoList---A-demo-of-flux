import Dispatcher from './dispatcher';

const ActionTypes = {
  ADD_TODO: Symbol('add'),
  DELETE_TODO: Symbol('del')
};

export {
  ActionTypes
};

export default {
  addTodo(text) {
    Dispatcher.dispatch({
      type: ActionTypes.ADD_TODO,
      payload: {
        text
      }
    });
  },

  deleteTodo(id) {
    Dispatcher.dispatch({
      type: ActionTypes.DELETE_TODO,
      payload: {
        id
      }
    });
  }
};