/*
 * @Author: handing
 * @Date: 2019-01-21 17:11:49
 * @Last Modified by: handing
 * @Last Modified time: 2019-04-29 09:46:34
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Store from './store';

import App from 'components/app';

ReactDOM.render(
  <Provider store={Store}>
    <App />
  </Provider>,
  document.querySelector('#app')
);