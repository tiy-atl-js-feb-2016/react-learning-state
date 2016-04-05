import React, { Component } from 'react';

export default class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    }
  }

  clickHandler() {
    let count = this.state.count;
    count++;
    this.setState({count: count});
  }

  render() {
    let { count } = this.state;
    return (
      <button onClick={::this.clickHandler}>{count} Times</button>
    )
  }
}
