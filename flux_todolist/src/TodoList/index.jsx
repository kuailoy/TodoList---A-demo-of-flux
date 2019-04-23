import React, { Component } from 'react';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    }
  }
  render() {
    return (
      <div>
        <ul>
          {this.state.list && this.state.list.map(item => <li key={item.id}>{item.text}</li>)}
        </ul>
        <div>
          <input type="text"/>
          <button>add to do</button>
        </div>
      </div>
    );
  }
}

export default TodoList;