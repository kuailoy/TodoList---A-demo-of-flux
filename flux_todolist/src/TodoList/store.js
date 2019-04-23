import ReduceStore from 'flux/utils';
import Dispatcher from './dispatcher';
import { ActionTypes } from './action'

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
      case ActionTypes.Add_TODO:
      {
        const { list, nextId } = state;
        const { payload: { text } } = action;
        const newList = [...list, {
          id: nextId,
          text
        }];

        return Object.assign({}, state, {
          list: newList,
          nextId: ++nextId
        });
      }
      case ActionTypes.DELETE:
      {
        const { list, nextId } = state;
        const { payload: { id } } = action;
        const newList = list.filter(item => item.id !== id);
        return Object.assign({}, state, {
          list: newList
        });
      }
    }
  }

}