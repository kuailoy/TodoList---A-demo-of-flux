import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';
import './index.less';

class TodoInput extends Component {

  constructor(props) {
    super(props);
    this.state = {};
    this.$input = createRef();
    this.addItem = this.addItem.bind(this);
  }

  addItem() {
    const text = this.$input.current.value.trim();
    if (text !== '') {
      this.$input.current.value = '';
      this.props.addTodo(text);
    }
  }

  render() {
    return (
      <div className="todo-input">
        <input placeholder="Enter Your Plan Here..." ref={this.$input} />
        <button onClick={this.addItem}>Add</button>
      </div>
    );
  }
}

TodoInput.propTypes = {
  addTodo: PropTypes.func.isRequired
}

export default TodoInput;