import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleWare from 'redux-thunk';
import Reducer from './reducers'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleWares = [thunkMiddleWare];
export default createStore(
  Reducer,
  composeEnhancers(applyMiddleware(...middleWares))
);