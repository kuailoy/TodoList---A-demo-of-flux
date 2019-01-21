/*
 * @Author: handing
 * @Date: 2019-01-21 17:11:31
 * @Last Modified by: handing
 * @Last Modified time: 2019-01-21 18:00:44
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
        const { list = [] } = state;
        const { payload } = action;
        const nextList = list.concat({
          id: state.nextId,
          text: payload.text
        });
        const nextState = Object.assign({}, state, {
          list: nextList,
          nextId: state.nextId + 1
        });
        return nextState;

    }
  }

}

export default new Store();