import { ActionTypes } from 'actions/todoActions';

export default (state = {
  list: [{
    id: 0,
    text: 'Eating',
    done: false
  }, {
    id: 1,
    text: 'Drinking',
    done: true
  }, {
    id: 2,
    text: 'Sleeping',
    done: false
  }],
  nextId: 3
}, action) => {
  switch(action.type) {
    case ActionTypes.ADD_TODO:
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

      case ActionTypes.DELETE_TODO:
        {
          const { payload } = action;
          const { list = [] } = state;
          const nextList = list.filter(item => item.id !== payload.id);
          return Object.assign({}, state, {
            list: nextList
          });
        }

      case ActionTypes.TOGGLE_TODO:
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

      default:
        return state;
  }
}