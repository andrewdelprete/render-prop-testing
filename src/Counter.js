import React, { Component } from "react";

export default class Counter extends Component {
  state = { counter: this.props.initial || 0 };

  increment = () => this.setState(prevState => ({ counter: prevState.counter + 1 }));
  decrement = () => this.setState(prevState => ({ counter: prevState.counter - 1 }));

  render() {
    const { increment, decrement } = this;
    const { counter } = this.state;

    return this.props.children({ increment, decrement, counter });
  }
}
