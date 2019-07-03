/*
 * @Author: handing
 * @Date: 2019-01-21 17:11:49
 * @Last Modified by: handing
 * @Last Modified time: 2019-07-03 15:43:19
 */
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Store from './store';
import SmartApp from 'containers/SmartApp';

ReactDOM.render(
  <Provider store={Store}>
    <SmartApp />
  </Provider>,
  document.querySelector('#app')
);