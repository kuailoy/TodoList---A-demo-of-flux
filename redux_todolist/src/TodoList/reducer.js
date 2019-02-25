import { ActionTypes } from './actions'

/**
 * @param {*} state
 * @param {*} action
 */
export default (state, action) => {
  switch (action.type) {
    case ActionTypes.ADD_TODO: {
      const { payload } = action;
      const { list = [] } = state;
      const newList = list.concat([{
        id: state.nextId,
        text: payload.text
      }]);
      return Object.assign({}, state, {
        list: newList,
        nextId: ++state.nextId
      });
    }

    case ActionTypes.DELETE_TODO: {
      const { payload } = action;
      const { list =[] } = state;
      const newList = list.filter(item => item.id !== payload.id);
      return Object.assign({}, state, {
        list: newList
      });
    }
    default:
      return state;
  }
}