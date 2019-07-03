import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AddTodo from 'containers/AddTodo';
import SelectFilter from 'containers/SelectFilter';
import FilterTodoList from 'containers/FilterTodoList';
import { FilterTypes } from 'actions/visibilityActions';
import './index.less';

const FILTER_OPTIONS = [
  { label: 'All', value: FilterTypes.SHOW_ALL},
  { label: 'Active', value: FilterTypes.SHOW_ACTIVE },
  { label: 'Completed', value: FilterTypes.SHOW_COMPLETED }
];

class App extends Component {

  componentDidMount() {
    this.props.loadInitData();
  }

  render() {
    const { status } = this.props;
    let content = null;
    if (status.isLoading) {
      content = '加载中';
    } else if (status.isFail) {
      content = '加载失败';
    } else if (status.isSuccess) {
      content = [
        <AddTodo key="add-todo" />,
        <SelectFilter key="select-filter" options={FILTER_OPTIONS} />,
        <FilterTodoList key="filter-todo-list" />
      ];
    }

    return (
      <div className="todo-list-app">{content}</div>
    );
  }
}

App.propTypes = {
  status: PropTypes.shape({
    isLoading: PropTypes.bool.isRequired,
    isSuccess: PropTypes.bool.isRequired,
    isFail: PropTypes.bool.isRequired
  }).isRequired,
  loadInitData: PropTypes.func.isRequired
}

export default App;
