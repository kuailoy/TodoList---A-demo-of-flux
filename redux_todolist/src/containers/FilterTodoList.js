import { connect } from 'react-redux';
import { FilterTypes } from 'actions/visibilityActions';
import TodoActions from 'actions/todoActions';
import TodoList from 'components/TodoList';

const filterTodos = (list, filter) => {
  switch (filter) {
    case FilterTypes.SHOW_COMPLETED:
      return list.filter(({ completed }) => completed);
    case FilterTypes.SHOW_ACTIVE:
      return list.filter(({ completed }) => !completed);
    case FilterTypes.SHOW_ALL:
    default:
      return list;
  }
}

const mapStateToProps = ({ todos, visibilityFilter }) => ({
  todos: filterTodos(todos.list, visibilityFilter.filter)
});

const mapDispatchToProps = dispatch => ({
  deleteTodo: id => dispatch(TodoActions.deleteTodo(id)),
  toggleTodo: id => dispatch(TodoActions.toggleTodo(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);