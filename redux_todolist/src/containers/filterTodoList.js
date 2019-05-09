import { connect } from "react-redux";
import TodoActions from "actions/todoActions";
import TodoList from 'components/todoList';
import { FilterTypes } from 'actions/visibilityActions';


const filterTodos = (list, filter) => {
  switch (filter) {
    case FilterTypes.SHOW_DONE:
      return list.filter(({ done }) => done);
    case FilterTypes.SHOW_TODO:
      return list.filter(({ done }) => !done);
    case FilterTypes.SHOW_ALL:
    default:
      return list
  }
}


const mapStateToProps = state => {
  const { todos, visibility } = state;
  return {
    todos: filterTodos(todos.list, visibility.filter)
  }
};

const mapDispatcherToProps = dispatch => ({
  toggleTodo: id => dispatch(TodoActions.toggleTodo(id)),
  deleteTodo: id => dispatch(TodoActions.deleteTodo(id))
});

export default connect(mapStateToProps, mapDispatcherToProps)(TodoList);