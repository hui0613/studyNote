import React from 'react';

class Helloworld extends React.Component {
  constructor() {
    super();
    this.state = {
      msg: 'data',
    };
  }
  render() {
    return (
      <div>
        hello {this.props.name} <h2>{this.state.msg}</h2>
      </div>
    );
  }
}

export default Helloworld;
