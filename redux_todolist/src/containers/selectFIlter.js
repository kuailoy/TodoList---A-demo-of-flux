import { connect } from 'react-redux';
import VisibilityActions from 'actions/visibilityActions';
import TodoSelector from 'components/todoSelector';

export default connect(({ visibility }) => ({
  filter: visibility.filter
}), dispatch => ({
  onSelect: filter => dispatch(VisibilityActions.setVisibility(filter))
}))(TodoSelector);