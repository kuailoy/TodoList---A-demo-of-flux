import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoSelector extends Component {

  handleChange(e) {
    console.log(e.target.value)
    this.props.onSelect(e.target.value)
  }
  render() {
    const { options, filter, onSelect } = this.props;
    return (
      <select className="filter-selector" value={filter} onChange={e => this.handleChange(e)} >
        {
          options.map(({ label, value }) => (
            <option value={value} key={value}>{label}</option>
          ))
        }
      </select>
    );
  }
}

TodoSelector.proptypes = {
  options: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired
  })).isRequired,
  filter: PropTypes.symbol.isRequired,
  onSelect: PropTypes.func.isRequired
}

export default TodoSelector;