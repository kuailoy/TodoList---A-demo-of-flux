import React, { Component } from 'react';
import PropTypes from 'prop-types';

import AddTodo from 'containers/addTodo'
import FilterTodoList from 'containers/filterTodoList';
import SelectFilter from 'containers/selectFilter';
import { FilterTypes } from 'actions/visibilityActions';

const FILTER_OPTIONS = [{
  label: '全部',
  value: FilterTypes.SHOW_ALL
}, {
  label: '未完成',
  value: FilterTypes.SHOW_TODO
}, {
  label: '已完成',
  value: FilterTypes.SHOW_DONE
}]

class App extends Component {

  componentDidMount() {
    this.props.loadInitData();
  }

  render() {
    const { status } = this.props;
    let content = null;
    // console.log(status)
    if (status.isLoding) {
      content = <p>加载中...</p>
    } else if (status.isFail) {
      content = <p>加载失败</p>
    } else if (status.isSuccess) {
      content = [
        <AddTodo key="add-todo" />,
        <SelectFilter key="select-filter" options={FILTER_OPTIONS} />,
        <FilterTodoList key="filter-todo-list" />
      ]
    }
    return (
      <div>{content}</div>
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