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
    const text = this.$input.current.value;
    if (text.trim() !==  '') {
      this.$input.current.value = '';
      this.props.addTodo(text);
    }
  }

  render() {
    return (
      <div className="todo-input">
        <input placeholder="请输入你的计划..." ref={this.$input} />
        <button onClick={this.addItem}>添加</button>
      </div>
    );
  }
}

TodoInput.propTypes = {
  addTodo: PropTypes.func.isRequired
}

export default TodoInput;