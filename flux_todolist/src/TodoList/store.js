/*
 * @Author: handing
 * @Date: 2019-01-21 17:11:31
 * @Last Modified by: handing
 * @Last Modified time: 2019-01-22 15:34:49
 */
import { ReduceStore } from 'flux/utils';
import Dispatcher from './dispatcher';
import { ActionTypes } from './actions';

// ReduceStore是Store的一种实现
class Store extends ReduceStore {
  constructor() {
    // 通过这种方式将当前Store绑定到Dispatcher
    super(Dispatcher);
  }

  /**
   * Store中的数据保存在state中
   * 该方法定义初始数据
   */
  getInitialState() {
    return {
      list: [
        {
          id: 0,
          text: '家庭聚会'
        },
        {
          id: 1,
          text: '看电影'
        },
        {
          id: 2,
          text: '学英语'
        }
      ],
      nextId: 3
    }
  }

  /**
   * 必须实现一个reduce方法
   * @param {*} state 上一个状态
   * @param {*} action action传入的action
   * @returns {*} 返回下一个状态
   */
  reduce(state, action) {
    console.log(action, 'store-reduce-action');
    switch(action.type) {
      case ActionTypes.ADD_TODO:
        {
          const { list = [] } = state;
          const { payload } = action;
          const nextList = list.concat({
            id: state.nextId,
            text: payload.text
          });
          return Object.assign({}, state, {
            list: nextList,
            nextId: state.nextId + 1
          });
        }
      case ActionTypes.DELETE_TODO:
        {
          const { list = [] } = state;
          const { payload } = action;
          const nextList = list.filter((todoItem) => todoItem.id !== payload.id);
          return Object.assign({}, state, {
            list: nextList
          })
        }
      default:
        // 不是以上操作的返回原始state
        return state;
    }
  }

}

export default new Store();