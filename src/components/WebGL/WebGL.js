import React, { Component } from 'react';
import classes from './WebGL.scss';
import App3d from '../../3d/App3d';
import Asteroid from '../../3d/asteroid';
import fetch from '../../fetch/fetch';

class WebGL extends Component {
  componentDidMount() {
    this.fetchData();
    this.app3d = new App3d();
    this.app3d.start();
    this.app3d.camera.position.z = 10;
  }

  async fetchData () {
    const response = await fetch();
    const date = Object.keys(response.near_earth_objects);
    const asteroids = response.near_earth_objects[date[0]];
    asteroids.forEach(this.makeAsteroid.bind(this));
  }

  makeAsteroid () {
    const a1 = new Asteroid({x: Math.random() * 10, y: Math.random() * 10, z: 0});
    this.app3d.scene.add(a1);
  }

  render() {
    return (
        <div id='webgl' className={classes.container}></div>
    );
  }
}

export default WebGL;