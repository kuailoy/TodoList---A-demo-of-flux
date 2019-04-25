import { ReduceStore } from 'flux/utils';
import Dispatcher from './dispatcher';
import { ActionTypes } from './actions'

class Store extends ReduceStore {
  constructor() {
    super(Dispatcher);
  }

  getInitialState() {
    return {
      list: [
        {
          id: 0,
          text: '吃饭'
        },
        {
          id: 1,
          text: '喝水'
        },
        {
          id: 2,
          text: '打痘痘'
        }
      ],
      nextId: 3
    }
  }

  reduce(state, action) {
    switch(action.type) {
      case ActionTypes.ADD_TODO:
      {
        console.log('add')
        const { list, nextId } = state;
        const { payload: { text } } = action;
        const newList = [...list, {
          id: nextId,
          text
        }];

        return Object.assign({}, state, {
          list: newList,
          nextId: nextId + 1
        });
      }
      case ActionTypes.DELETE_TODO:
      {
        const { list, nextId } = state;
        const { payload: { id } } = action;
        const newList = list.filter(item => item.id !== id);
        return Object.assign({}, state, {
          list: newList
        });
      }
      default:
      console.log('default')
        return state;
    }
  }

}

export default new Store();