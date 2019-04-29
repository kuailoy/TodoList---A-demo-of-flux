import { connect } from 'react-redux';
import TodoAction from 'actions/todoAction';
import TodoList from 'components/todoList';

const mapStateToProps = ({ todos }) => ({
  todos: todos.list
});

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(TodoAction.toggleTodo(id)),
  deleteTodo: id => dispatch(TodoAction.deleteTodo(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);