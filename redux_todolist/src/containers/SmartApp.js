import { connect } from 'react-redux';
import GetConfigActions from 'actions/getConfigActions';
import App from 'components/App';

export default connect(({ status }) => ({
  status
}), dispatch => ({
  loadInitData: () => dispatch(GetConfigActions.loadInitData())
}))(App);