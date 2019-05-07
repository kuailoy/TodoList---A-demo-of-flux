export const ActionTypes = {
  ADD_TODO: 'ADD_TODO',
  DELETE_TODO: 'DELETE_TODO',
  TOGGLE_TODO: 'TOGGLE_TODO'
}

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