/*
 * @Author: handing
 * @Date: 2019-01-21 17:11:25
 * @Last Modified by: handing
 * @Last Modified time: 2019-01-21 17:36:21
 */
import Dispatcher from './dispatcher';

// 定义action的类型
const ActionTypes = {
  ADD_TODO: 'ADD_TODO',
  DELETE_TODO: 'DELETE_TODO'
};

export { ActionTypes };

// actions 提供两个方法：添加和删除
export default {
  /**
   * 通过向Dispatcher传递数据来派发action
   * 传递数据的格式为一般为约定格式
   * type: action类型，取值为ActionTypes的一种
   * payload: 传递的数据
   */
  addTodo(text) {
    Dispatcher.dispatch({
      type: ActionTypes.ADD_TODO,
      payload: { text }
    })
  },

  deleteTodo(id) {
    Dispatcher.dispatch({
      type: ActionTypes.DELETE_TODO,
      payload: { id }
    })
  }
}