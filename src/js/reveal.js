import React, { Component, PropTypes } from 'react';

export default class Reveal extends Component {
  static propTypes = {
    msg: PropTypes.string.isRequired
  }

  constructor(props) {
    super(props);
    // set initial state
    this.state = {
      revealed: ''
    }
  }

  changeHandler(event) {
    let { value } = event.target;
    let { msg } = this.props;
    console.log(value);
    let revealed = msg.substr(0, value.length);
    this.setState({revealed});
  }

  render() {
    let { revealed } = this.state;
    return (
      <div>
        <h1>{revealed}</h1>
        <input onChange={::this.changeHandler} type="text" value={revealed}/>
      </div>
    )
  }
}
