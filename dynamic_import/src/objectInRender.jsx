import React, { Component } from 'react';
import updateLogger from './updateLogger';

@updateLogger
class IAmGroot extends Component {
  render() {
    return <p>I am Groot.</p>
  }
}

class SameObject extends Component {
  state = {
    age: 0
  }

  growUp = () => {
    this.setState(({ age }) => ({
      age: age + 1
    }));
  }

  render() {
    const style = { color: 'red' }
    return <div className="component-test" style={style}>
      <button onClick={this.growUp}>grow up</button>
      <IAmGroot />
      <p>I am {this.state.age} year(s) old.</p>
    </div>;
  }
}

export default SameObject;