import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import './index.less';

class TodoItem extends Component {
  render() {
    const { text, done, onToggle, onDelete } = this.props;
    const itemClass = classNames({ 'todo-item': true,  'active': done});
    return (
      <li className={itemClass} onClick={onToggle}>
        <span className="text">{text}</span>
        <span className="close" onClick={onDelete}>&times;</span>
      </li>
    );
  }
}

TodoItem.propTypes = {
  text: PropTypes.string.isRequired,
  done: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired
}

export default TodoItem;