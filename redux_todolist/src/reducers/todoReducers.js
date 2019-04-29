import { ActionTypes } from 'actions/todoAction';

export default (state = {
  list: [{
    id: 0,
    text: 'keep',
    done: false
  }, {
    id: 1,
    text: 'read',
    done: true
  }, {
    id: 2,
    text: 'movie',
    done: false
  }],
  nextId: 3
}, action) => {
  const { payload } = action;
  const { list = [], nextId } = state;
  let nextList = null;

  switch (action.type) {
    case ActionTypes.ADD_TODO:
      console.log('add');
      nextList = list.concat([{
        id: nextId,
        text: payload.text,
        done: false
      }]);

      return Object.assign({}, state, {
        list: nextList,
        nextId: nextId + 1
      });

    case ActionTypes.DELETE_TODO:
      console.log('delete');
      nextList = list.filter(item => item.id !== payload.id);
      return Object.assign({}, state, {
        list: nextList
      });

    case ActionTypes.TOGGLE_TODO:
      console.log('toggle');
      nextList = list.map(item => (item.id !== payload.id
        ? item
        : Object.assign({}, item, {
           done: !item.done
        })));
      return Object.assign({}, state, {
        list: nextList
      });

    default:
      return state;
  }
}