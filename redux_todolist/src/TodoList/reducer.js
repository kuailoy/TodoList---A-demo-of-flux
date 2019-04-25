import { ActionTypes } from './actions';

export default (state, action) => {
  switch (action.type) {
    case ActionTypes.ADD_TODO: {
      const { payload: { text } } = action;
      const { list = [], nextId } = state;

      const newList = list.concat([{
        id: nextId,
        text
      }]);

      return Object.assign({}, state, {
        list: newList,
        nextId: nextId + 1
      });
    }

    case ActionTypes.DELETE_TODO: {
      const { payload: { id } } = action;
      const { list = [] } = state;

      const newList = list.filter(item => id !== item.id);

      return Object.assign({}, state, {
        list: newList
      });
    }

    default:
      return state;
  }
}