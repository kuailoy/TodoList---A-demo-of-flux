import { connect } from 'react-redux';

import TodoAction from 'actions/todoAction';
import TodoInput from 'components/todoInput';

export default connect(null, dispatch => ({
  addTodo: text => dispatch(TodoAction.addTodo(text))
}))(TodoInput);
