import { ActionTypes as TodoActionTypes } from 'actions/todoActions';
import { ActionTypes as GetConfigActionTypes } from 'actions/getConfigActions';

export default (state = {
  list: [],
  nextId: 0,
  filter: 'SHOW_TODO'
}, action) => {
  switch(action.type) {
    case TodoActionTypes.ADD_TODO:
      {
        const { payload } = action;
        const { list = [], nextId } = state;
        const nextList = list.concat([{
          id: nextId,
          text: payload.text,
          done: false
        }]);
        return Object.assign({}, state, {
          list: nextList,
          nextId: nextId + 1
        });
      }

      case TodoActionTypes.DELETE_TODO:
        {
          const { payload } = action;
          const { list = [] } = state;
          const nextList = list.filter(item => item.id !== payload.id);
          return Object.assign({}, state, {
            list: nextList
          });
        }

      case TodoActionTypes.TOGGLE_TODO:
        {
          const { payload } = action;
          const { list = [] } = state;
          const nextList = list.map(item => item.id !== payload.id ? item : Object.assign({}, item, {
            done: !item.done
          }));
          return Object.assign({}, state, {
            list: nextList
          });
        }

      case GetConfigActionTypes.REQUEST_SUCCESS:
        {
          const { payload } = action;
          const { list =[] } = state;
          const initState = payload.result;
          const nextState =  Object.assign({}, state, {
            list: initState.list,
            nextId: initState.nextId,
            filter: 'SHOW_TODO'
          });
          return nextState;
        }

      default:
        return state;
  }
}