import * as THREE from 'three';

let container;
let scene;
let camera;

const renderer = new THREE.WebGLRenderer();

const start = () => {
  container = document.getElementById('webgl');
  scene = new THREE.Scene();
  camera = camera = new THREE.PerspectiveCamera( 75, container.offsetWidth/container.offsetHeight, 0.1, 1000 );
  renderer.setSize( container.offsetWidth, container.offsetHeight );
  container.appendChild( renderer.domElement );
  camera.position.z = 5;
};

export { start, scene, camera, renderer };