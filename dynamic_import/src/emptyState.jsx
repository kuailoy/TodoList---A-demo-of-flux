import React, { Component } from 'react';
import updateLogger from './updateLogger';

@updateLogger
class EmptyState extends Component {

  doNothing = () => {
    this.setState({});
  }

  render() {
    return <div className="component-test">
      <button onClick={this.doNothing}>do nothing</button>
      <p>I am Groot.</p>
    </div>;
  }
}

export default EmptyState;
