import React from 'react';
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
      TodoStore.dispatch(Actions.addTodo(text))
    }
  }

  deleteItem(id) {
    console.log(id);
  }

  render() {
    return (
      <div>
        <ul>
          {
            this.state.list.map(item => (
              <li key={item.id}>
                {item.text}
                <input type="checkbox" onChange={this.deleteItem.bind(this, item.id)} />
              </li>
            ))
          }
        </ul>
        <div>
          <input ref={ref => this.$input = ref} />
          <button onClick={this.addItem.bind(this)}>Add</button>
        </div>
      </div>
    );
  }
}

export default TodoList;