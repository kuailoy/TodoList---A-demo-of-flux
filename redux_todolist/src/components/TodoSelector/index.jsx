import React from 'react';
import PropTypes from 'prop-types';
import './index.less';

const TodoSelector = ({ options, filter, onSelect }) => (
    <select className="filter-selector" value={filter} onChange={(e) => onSelect(e.target.value)}>
      {
        options.map(({ label, value }) => (
          <option key={value} value={value}>{label}</option>
        ))
      }
    </select>
);

TodoSelector.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired
    }).isRequired,
  ).isRequired,
  filter: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired
}

export default TodoSelector;