import React, { Component } from 'react';
import classes from './WebGL.scss';
import App3d from '../../3d/App3d';
import Asteroid from '../../3d/asteroid';
import Earth from '../../3d/earth';
import fetch from '../../fetch/fetch';
import utils from '../../utils';
import Raycaster from '../../Raycaster';

class WebGL extends Component {
  componentDidMount() {
    //this.fetchData();
    this.app3d = new App3d();
    this.app3d.start();
    this.app3d.camera.position.z = 1000;
    this.app3d.scene.add(new Earth());
    this.makeRaycaster();
  }

  async fetchData () {
    const response = await fetch();
    const date = Object.keys(response.near_earth_objects);
    const asteroids = response.near_earth_objects[date[0]];
    asteroids.forEach(this.makeAsteroid.bind(this));
  }

  makeAsteroid (asteroid) {
    const pos = {x: utils.randomFloat(-200, 200), y: utils.randomFloat(-200, 200), z: utils.randomFloat(-200, 200)};
    const scale = asteroid.estimated_diameter.meters;

    const a1 = new Asteroid(pos, scale);
    this.app3d.scene.add(a1);
  }

  makeRaycaster() {
    this.raycaster = new Raycaster(this.app3d.camera, this.app3d.container);
    window.addEventListener('mousedown', () => {
      this.raycaster.cast();
    });
  }

  render() {
    return (
        <div id='webgl' className={classes.container}></div>
    );
  }
}

export default WebGL;
