import { scene, camera, renderer } from './init3d';
import { BoxGeometry, MeshBasicMaterial, Mesh } from 'three';
import { addCube } from './cube';

const animate = function () {
    requestAnimationFrame( animate );
    renderer.render(scene, camera);
};

export { animate };