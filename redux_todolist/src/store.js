import {
  createStore,
  applyMiddleware,
  compose
} from 'redux';
import thunkMiddleware from 'redux-thunk';
import loggerMiddleware from 'redux-logger';
import Reducer from './reducers';

const myMiddleware = ({ getState }) => next => action => {
  action.author = 'kuailoy';
  action.timeStamp = new Date();
  return next(action);
}

const middlewares = [thunkMiddleware, myMiddleware];

if (process.env.NODE_ENV === 'development') {
  middlewares.push(loggerMiddleware);
}

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && compose;

export default createStore(
  Reducer,
  composeEnhancer(applyMiddleware(...middlewares))
);