import React, { Component } from 'react';

export default class Interval extends Component {
  constructor() {
    super();
    // set an initial value for our state
    this.state = {now: new Date()};
  }

  componentDidMount() {
    // run this after the component is on the screen
    this.interval = setInterval(() => {
      this.setState({now: new Date()});
    }, 1000);
  }

  componentWillUnmount() {
    // run this just before it is removed
    clearInterval(this.interval);
  }

  render() {
    let { now } = this.state;
    let formatted = `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
    return (
      <h1>{formatted}</h1>
    );
  }
}
