import React, { Component } from 'react';

import NameNeverChange from '../nameNeverChange';
import ObjectInRender from '../objectInRender';
import EmptyState from '../emptyState';

import './index.less';

class App extends Component {
  render() {
    return <div className="app">
      <NameNeverChange />
      <ObjectInRender />
      <EmptyState />
    </div>;
  }
}

export default App;