import React, { Component } from 'react';
import TodoStore from './store';
import Actions from './actions';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: TodoStore.getInitialState().list
    }
    this.$input = React.createRef();
    this.onStoreChange = this.onStoreChange.bind(this)
  }

  componentDidMount() {
    this.removeListener = TodoStore.addListener(this.onStoreChange);
  }

  componentWillUnmount() {
    this.removeListener();
  }

  onStoreChange() {
    console.log('onstorechange', this)
    this.setState({
      list: TodoStore.getState().list
    });
  }

  addItem() {
    const text = this.$input.current.value
    Actions.addTodo(text);
  }

  deleteItem(id) {
    console.log(arguments)
    Actions.deleteTodo(id);
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.list && this.state.list.map(item => (
            <li key={item.id}>
              <label>{item.text}</label>
              <input type="checkbox" onClick={this.deleteItem.bind(this, item.id)} />
            </li>
          ))}
        </ul>
        <div>
          <input type="text" ref={this.$input} />
          <button onClick={this.addItem.bind(this)}>add to do</button>
        </div>
      </div>
    );
  }
}

export default TodoList;