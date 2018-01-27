import * as THREE from 'three';
import Updater from './updater';
    
class App3d {
    constructor(){
        this.container = document.getElementById('webgl');
        this.scene = new THREE.Scene(); ;
        this.camera = new THREE.PerspectiveCamera( 75, this.container.offsetWidth/this.container.offsetHeight, 0.1, 1000 );
        this.renderer = new THREE.WebGLRenderer();
        this.renderer.setSize( this.container.offsetWidth, this.container.offsetHeight );
        this.container.appendChild(this.renderer.domElement);
        this.updater = new Updater(this.scene, this.camera, this.renderer);
    }

    start() {
        this.updater.start();
    }
}

export default App3d;