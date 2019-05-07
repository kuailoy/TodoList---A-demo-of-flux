import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoInput extends Component {

  constructor(props) {
    super(props);
    this.$input = React.createRef();
    this.clickButton = this.clickButton.bind(this);
  }

  clickButton() {
    const text = this.$input.current.value;
    if (text.trim() !== '') {
      this.$input.current.value = '';
      this.props.addTodo(text);
    }
  }

  render() {
    return <div>
      <input ref={this.$input} placeholder="请输入计划" />
      <button onClick={this.clickButton}>add</button>
    </div>;
  }
}

TodoInput.propTypes = {
  addTodo: PropTypes.func.isRequired
}

export default TodoInput;