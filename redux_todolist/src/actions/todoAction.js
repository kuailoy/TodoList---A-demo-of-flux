export const ActionTypes = {
  ADD_TODO: Symbol('add'),
  DELETE_TODO: Symbol('del'),
  TOGGLE_TODO: Symbol('toggle')
};

export default {
  addTodo: (text) => ({
    type: ActionTypes.ADD_TODO,
    payload: {
      text
    }
  }),

  deleteTodo: (id) => ({
    type: ActionTypes.DELETE_TODO,
    payload: {
      id
    }
  }),

  toggleTodo: (id) => ({
    type: ActionTypes.TOGGLE_TODO,
    payload: {
      id
    }
  })
}