import { connect } from 'react-redux';
import VisibilityActions from 'actions/visibilityActions';
import TodoSelector from 'components/TodoSelector';


export default connect(({ visibilityFilter }) => ({
    filter: visibilityFilter.filter
}), dispatch => ({
  onSelect: filter => dispatch(VisibilityActions.setVisibility(filter))
}))(TodoSelector);