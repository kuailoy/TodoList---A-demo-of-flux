import { connect } from "react-redux";
import Actions from "actions/todoActions";
import TodoList from 'components/todoList';

const mapStateToProps = state => ({
  todos: state.todos
});

const mapDispatcherToProps = dispatcher => ({
  toggleTodo: id => dispatcher(Actions.toggleTodo(id)),
  deleteTodo: id => dispatcher(Actions.deleteTodo(id))
});

export default connect(mapStateToProps, mapDispatcherToProps)(TodoList);