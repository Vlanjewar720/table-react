import React, { Component } from 'react';
import '../mycalculation/Calsi.css';
import ResultComponent from '../mycalculation/ResultComponent';
import KeyPadComponent from '../mycalculation/KeyPadComponent';

class Calsi extends Component {
  state = {
    result: ""
  }

  onClick = input => {
    if(input === "=") {
      this.calculate();
    }

    else if(input === "C") {
      this.reset();
    }

    else if(input === "CE") {
      this.backspace();
    }

    else {
      this.setState({
        result: this.state.result + input
      })
    }
  };

  calculate = () => {
    var checkResult = ''
    if(this.state.result.includes('--')) {
      checkResult = this.state.result.replace('--', '+')
    } else {
      checkResult = this.state.result;
    }

    try {
      this.setState({
        result:(eval(checkResult)|| "") + ""
      })
    } catch(e) {
      this.setState({
        result: "error"
      })
    }
  };

  reset = () => {
    this.setState({
      result: ""
    })
  };

  backspace = () => {
    this.setState({
        result: this.state.result.slice(0, -1)
    })
  };

  render() {
    return (
      <div>
        <div className="container">
          <div className="calculator">
            <form>
            
                <ResultComponent result={this.state.result} />
                <KeyPadComponent onClick={this.onClick} />
            </form>
         </div>
       </div>
      </div>
    )
  }
}

export default Calsi;