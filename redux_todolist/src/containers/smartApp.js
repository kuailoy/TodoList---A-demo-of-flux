import { connect } from 'react-redux';
import App from 'components/app';
import GetConfigActions from 'actions/getConfigActions';

export default connect(({ status }) => ({
  status
}), dispatch => ({
  loadInitData: () => dispatch(GetConfigActions.loadInitData())
}))(App);