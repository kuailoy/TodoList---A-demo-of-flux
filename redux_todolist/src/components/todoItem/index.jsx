import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {
  render() {
    const { text, id } = this.props;
    return (
      <li key={id}>
        <span>{text}</span>
        <span>&times;</span>
      </li>
    );
  }
}

TodoItem.propTypes = {
  text: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired
}

export default TodoItem;