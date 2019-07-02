import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from '../TodoItem';


const TodoList = ({ todos, deleteTodo, toggleTodo }) => (
  <ul className="todo-list">
    {
      todos.map(todo =>
        <TodoItem
          key={todo.id}
          {...todo}
          onDelete={() => deleteTodo(todo.id)}
          onToggle={() => toggleTodo(todo.id)} />
      )
    }
  </ul>
)

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    propTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired
    }).isRequired
  ).isRequired,
}

export default TodoList;