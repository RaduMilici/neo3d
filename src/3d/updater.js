import { scene, camera, renderer } from './init3d';
import { BoxGeometry, MeshBasicMaterial, Mesh } from 'three';

let cube;

const addCube = () => {
    const geometry = new BoxGeometry( 1, 1, 1 );
    const material = new MeshBasicMaterial( { color: 0x00ff00 } );
    cube = new Mesh( geometry, material );
    scene.add( cube );
};

const animate = function () {
    requestAnimationFrame( animate );

    cube.rotation.x += 0.1;
    cube.rotation.y += 0.1;

    renderer.render(scene, camera);
};

export { animate, addCube };