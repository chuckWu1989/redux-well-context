import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.increase = this.increase.bind(this);
    this.decrease = this.decrease.bind(this);
    this.state = { count: 0 };
  }
  increase() {
    const { state: { count } } = this;
    this.setState({ count: count + 1 });
  }
  decrease() {
    const { state: { count } } = this;
    this.setState({ count: count - 1 });
  }
  render() {
    const { state: { count }, increase, decrease } = this;
    return (
      <div>
        <div>{count}</div>
        <div>
          <input type="button" onClick={increase} value="Increase" />
          <input type="button" onClick={decrease} value="Decrease" />
        </div>
      </div>
    );
  }
}

export default Counter;

