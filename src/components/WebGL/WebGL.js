import React, { Component } from 'react';
import classes from './WebGL.scss';
import { start } from '../../3d/init3d';
import { animate } from '../../3d/updater';
import { addCube } from '../../3d/cube';
import asteroid from '../../3d/asteroid';

class WebGL extends Component {
  componentDidMount() {
    console.log(asteroid);
    start();
    addCube();
    asteroid.addAsteroid();
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