import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames'
import './index.less';

const TodoItem = ({ text, completed, onDelete, onToggle }) => {
  const itemClass = classNames({ 'todo-item': true, 'completed': completed })
  return (
    <li className={itemClass} onClick={onToggle}>
      <span className="text">{text}</span>
      <span className="close" onClick={onDelete}>&times;</span>
    </li>
  )
}

TodoItem.propTypes = {
  text: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  onDelete: PropTypes.func.isRequired,
  onToggle: PropTypes.func.isRequired
}

export default TodoItem;