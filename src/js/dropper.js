import React, { Component } from 'react';
import Dropzone from 'react-dropzone';

export default class Dropper extends Component {
  constructor() {
    super();
    this.state = {
      preview: 'http://cumbrianrun.co.uk/wp-content/uploads/2014/02/default-placeholder.png'
    }
  }

  dropHandler([file]) {
    console.log(file);
    this.setState({preview: file.preview});
  }

  render() {
    return (
      <Dropzone onDrop={::this.dropHandler}>
        Drop Something Here
        <img src={this.state.preview} width="50" height="50"/>
      </Dropzone>
    )
  }
}
