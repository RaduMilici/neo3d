import React, { Component } from 'react';
import classes from './WebGL.scss';
import App3d from '../../3d/App3d';
//import { addCube } from '../../3d/cube';
import Asteroid from '../../3d/asteroid';

class WebGL extends Component {
  componentDidMount() {
    const app3d = new App3d();
    app3d.start();
    const a1 = new Asteroid({
      x: 1,
      y: 3, 
      z: 1
    });
    const a2 = new Asteroid({
      x: 3,
      y: 1, 
      z: 2
    });
    this.app3d.scene.add(a1, a2);
    console.log('WebGL container mounted');
  }

  render() {
    return (
        <div id='webgl' className={classes.container}></div>
    );
  }
}

export default WebGL;