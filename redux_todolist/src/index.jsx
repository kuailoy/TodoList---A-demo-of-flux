import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Store from './store';

// import App from 'components/app';
import SmartApp from 'containers/smartApp';

ReactDOM.render(
  <Provider store={Store}>
    <SmartApp />
  </Provider>,
  document.querySelector('#app')
);