import React, { Component } from 'react';
import '../mycalculation/Calsi.css';

class ResultComponent extends Component {
  render() {
    let { result } = this.props;

    return (
      <div className="display">
        <input type='text' value={ result } />
      </div>
    )
  }
}

export default ResultComponent;