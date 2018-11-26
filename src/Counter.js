import React from 'react';
import { connect } from 'react-redux';

class Counter extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      addAmount: 0,
      counted: 0,
      inputField: 0
  };
  }
  increment = () => {
    this.setState({
      count: ++this.state.count,
      counted: ++this.state.counted,
    });
  };

  decrement = () => {
    this.setState({
      count: ++this.state.count,
      counted: ++this.state.counted,
    });
  };

  reset = () => {
    this.setState({
      count: this.state.count = 0,
    });
  };
  
  inputField = () => {
    this.setState({
      count: this.state.count + parseInt(this.state.addAmount),
      counted: this.state.clicked = 0,
    });
  };
  
  render() {
    return (
      <div>
        <h1>React Counter</h1>
        <div>
        <button onClick={this.decrement.bind(this)}>-</button>
          <span>{this.state.count}</span>
          <button onClick={this.increment.bind(this)}>+</button>
          <p>Times the increment/decrement button have been clicked:{this.state.counted}</p>
          <input
            type="number"
            onChange={event => this.setState({addAmount: event.target.value })}
            value={this.state.addAmount}
          /><button onClick={this.inputField.bind(this)}>Change Count Number</button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    count: state.count
  };
}

export default connect(mapStateToProps)(Counter);