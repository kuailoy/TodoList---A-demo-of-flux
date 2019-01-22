/*
 * @Author: handing
 * @Date: 2019-01-21 17:11:19
 * @Last Modified by: handing
 * @Last Modified time: 2019-01-22 16:00:08
 */

import React, { Component, createRef } from 'react';
import TodoStore from './store';
import Actions from './actions';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: TodoStore.getInitialState().list
    }
    this.$input = createRef();
    this.onStoreChange = this.onStoreChange.bind(this);
  }

  componentDidMount() {
    // Store提供了监听函数addEventListener, 传入的参数是Store改变时执行的回调函数，返回一个取消监听的方法
    this.removeListener = TodoStore.addListener(this.onStoreChange)
  }

  componentWillUnmount() {
    // 组件卸载前移除监听
    this.removeListener();
  }

  onStoreChange() {
    // 不需要关心Store具体的改变部分，而是更新整个Store的数据
    console.log(this, 'this')
    this.setState({
      todoList: TodoStore.getState().list
    });
  }

  handleChecked(id) {
    // 发出action指令
    Actions.deleteTodo(id)
  }

  handleButtonClick() {
    const text = this.$input.current.value;
    if (text.trim() !== '') {
      this.$input.current.value = '';
      // 发出action指令
      Actions.addTodo(text);
    }

  }

  render() {
    return (
      <div>
        <ul>
          {this.state.todoList.map((todoItem) => (
            <li key={todoItem.id}>
              <span>{todoItem.text}</span>
              <input type="checkbox" onChange={this.handleChecked.bind(this, todoItem.id)}/>
            </li>
          ))}
        </ul>
        <input ref={this.$input} />
        <button onClick={this.handleButtonClick.bind(this)}>添加todo</button>
      </div>
    );
  }
}
export default TodoList;