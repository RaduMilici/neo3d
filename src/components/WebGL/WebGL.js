import React, { Component } from 'react';
import classes from './WebGL.scss';

class WebGL extends Component {
  componentDidMount() {
    console.log('WebGL container mounted');
    console.log(document.getElementById('webgl'));
  }

  render() {
    return (
        <div id='webgl' className={classes.container}></div>
    );
  }
}

export default WebGL;