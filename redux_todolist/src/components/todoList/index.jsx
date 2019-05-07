import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TodoItem from 'components/todoItem';

class TodoList extends Component {
  render() {
    const { todos, toggleTodo, deleteTodo } = this.props;
    return (
      <ul>
        {
          todos.map(item => (
            <TodoItem
              key={item.id}
              text={item.text}
              done={item.done}
              onToggle={() => toggleTodo(item.id)}
              onDelete={() => deleteTodo(item.id)} />
          ))
        }
      </ul>
    );
  }
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    done: PropTypes.bool.isRequired
  })).isRequired,
  toggleTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired
}

export default TodoList;