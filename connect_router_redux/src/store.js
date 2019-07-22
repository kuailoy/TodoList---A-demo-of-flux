import { connectRouter, routerMiddleware } from 'connected-react-router';
import { createStore, compose, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { createHashHistory } from 'history';
import reducers from './reducers';

const history = createHashHistory();

export {
  history
}

export default createStore(
  compose(
    connectRouter(history),
    combineReducers
  )({
    ...reducers
  }),
  applyMiddleware(
    routerMiddleware(history),
    createLogger()
  )
);