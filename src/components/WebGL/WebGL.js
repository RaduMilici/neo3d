import React, { Component } from 'react';
import classes from './WebGL.scss';
import { start } from '../../3d/init3d';
import { animate, addCube } from '../../3d/updater';
class WebGL extends Component {
  componentDidMount() {
    start();
    addCube();
    animate();
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