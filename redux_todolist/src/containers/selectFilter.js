import { connect } from 'react-redux';

import VisibilityAction from 'actions/visibilityAction'
import TodoSelector from 'components/todoSelector';

export default connect(({ visibility }) => ({
  filter: visibility.filter
}), dispatch => ({
  onSelect: filter => dispatch(VisibilityAction.setVisibility(filter))
}))(TodoSelector);