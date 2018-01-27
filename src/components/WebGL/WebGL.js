import React, { Component } from 'react';
import classes from './WebGL.scss';
import App3d from '../../3d/App3d';
//import { addCube } from '../../3d/cube';
import Asteroid from '../../3d/asteroid';

class WebGL extends Component {
  componentDidMount() {
    const app3d = new App3d();
    app3d.start();
    const a1 = new Asteroid({x: 0, y: 0, z: 0});
    app3d.scene.add(a1);
    app3d.camera.position.z = 10;
  }

  render() {
    return (
        <div id='webgl' className={classes.container}></div>
    );
  }
}

export default WebGL;