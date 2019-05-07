import { connect } from 'react-redux';
import TodoActions from 'actions/todoActions';
import TodoInput from 'components/todoInput';

export default connect(null, dispatch => ({
  addTodo: text => dispatch(TodoActions.addTodo(text))
}))(TodoInput);