import React, { Component } from 'react';

import AddTodo from 'containers/addTodo';
import FilterTodoList from 'containers/filterTodoList';

class App extends Component {
  render() {
    return (
      <div>
        <AddTodo />
        <FilterTodoList />
      </div>
    );
  }
}

export default App;