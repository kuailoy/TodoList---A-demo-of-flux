import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoSelector extends Component {
  render() {
    const { options, filter, onSelect } = this.props;
    return (
      <select value={filter} onChange={e => onSelect(e.target.value)}>
        {
          options.map(({ label, value }) => (
            <option value={value} key={value}>{label}</option>
          ))
        }
      </select>
    );
  }
}

TodoSelector.propTypes = {
  options: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    value: PropTypes.string
  })).isRequired,
  filter: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired
}

export default TodoSelector;