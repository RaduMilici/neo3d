import React, { Component } from 'react';
import classes from './WebGL.scss';

class WebGL extends Component {
  componentDidMount() {
    console.log('WebGL container mounted');
  }

  render() {
    return (
        <div className={classes.container}></div>
    );
  }
}

export default WebGL;