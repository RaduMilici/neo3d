import { scene } from './init3d';
import { BoxGeometry, MeshBasicMaterial, Mesh } from 'three';

let cube;

const addCube = () => {

    const geometry = new BoxGeometry( 1, 1, 1 );
    const material = new MeshBasicMaterial( { color: 0x00ff00 } );
    cube = new Mesh( geometry, material );
    scene.add( cube );

};

const rotateCube = () => {

    // cube.rotation.x += 0.1; 
    // cube.rotation.y += 0.1; 

};

export { addCube, rotateCube };