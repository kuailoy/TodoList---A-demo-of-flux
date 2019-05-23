import React, { Component } from 'react';
import updateLogger from './updateLogger';

@updateLogger
class Name extends Component {
  render() {
    return <p>I am {this.props.name}.</p>;
  }
}

class SameObject extends Component {
  state = {
    person: {
      name: 'Groot',
      age: 0
    }
  }

  growUp = () => {
    this.setState(({ person: { name, age } }) => ({
      person: {
        name,
        age: age + 1
      }
    }));
  }

  render() {
    return <div className="component-test">
      <button onClick={this.growUp}>grow up</button>
      <Name name={this.state.person.name} />
      <p>I am {this.state.person.age} year(s) old.</p>
    </div>;
  }
}

export default SameObject;