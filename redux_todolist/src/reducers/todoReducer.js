import { ActionTypes as TodoActionTypes } from 'actions/todoActions';
import { ActionTypes as GetConfigActions } from 'actions/getConfigActions';

export default (state = {
  list: [],
  nextId: 0
}, action) => {
  switch (action.type) {
    case TodoActionTypes.ADD_TODO: {
      const { payload } = action;
      const { list = [], nextId } = state;

      return Object.assign({}, state, {
        list: [
          ...list,
          {
            id: nextId,
            text: payload.text,
            completed: false
          }
        ],
        nextId: nextId + 1
      });
    }

    case TodoActionTypes.DELETE_TODO: {
      const { payload } = action;
      const { list =[] } = state;

      return Object.assign({}, state, {
        list: list.filter(item => item.id !== payload.id)
      });
    }

    case TodoActionTypes.TOGGLE_TODO: {
      const { payload } = action;
      const { list =[] } = state;

      return Object.assign({}, state, {
        list: list.map(item => item.id === payload.id ? Object.assign({}, item, {
          completed: !item.completed
        }) : item)
      });
    }

    case GetConfigActions.REQUEST_SUCCESS: {
      const { payload: { result } } = action;

      return Object.assign({}, state, {
        list: result.list,
        nextId: result.nextId
      });
    }

    default:
      return state;
  }
}