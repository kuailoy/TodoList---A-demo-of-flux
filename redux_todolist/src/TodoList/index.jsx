import React, { Component } from 'react';
import TodoStore from './store';
import Actions from './actions';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: TodoStore.getState().list
    }
    this.$input = null;
    this.onStoreChange = this.onStoreChange.bind(this);
  }

  componentDidMount() {
    TodoStore.subscribe(this.onStoreChange);
  }

  componentWillUnmount() {
    TodoStore.unsubscribe(this.onStoreChange);
  }

  onStoreChange() {
    this.setState({
      list: TodoStore.getState().list
    });
  }

  addItem() {
    const text = this.$input.value;
    if (text.trim() !== '') {
      this.$input.value = '';
      TodoStore.dispatch(Actions.addTodo(text));
    }
  }

  deleteItem(id) {
    TodoStore.dispatch(Actions.deleteTodo(id));
  }

  render() {
    return (
      <div>
        <ul>
          {
            this.state.list && this.state.list.map(({text, id}) => (
              <li key={id}>
                <label>{text}</label>
                <input type="checkbox" onChange={this.deleteItem.bind(this, id)} />
              </li>
            ))
          }
        </ul>
        <p>
          <input ref={ref => this.$input = ref} />
          &nbsp;
          <button onClick={this.addItem.bind(this)}>add</button>
        </p>
      </div>
    );
  }
}

export default TodoList;