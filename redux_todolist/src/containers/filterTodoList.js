import { connect } from "react-redux";
import TodoActions from "actions/todoActions";
import TodoList from 'components/todoList';

const mapStateToProps = state => ({
  todos: state.todos.list
});

const mapDispatcherToProps = dispatch => ({
  toggleTodo: id => dispatch(TodoActions.toggleTodo(id)),
  deleteTodo: id => dispatch(TodoActions.deleteTodo(id))
});

export default connect(mapStateToProps, mapDispatcherToProps)(TodoList);