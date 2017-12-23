import { scene } from './init3d';
import { SphereGeometry, MeshBasicMaterial, Mesh, Vector3 } from 'three';

class Asteroid {
    constructor () {
        this.geometry = null;
        this.material = null;
        this.mesh = new Mesh();
        this.position = new Vector3();
    }
    
    addAsteroid() {
        this.geometry = new SphereGeometry(0.2, 20, 20 );
        this.material = new MeshBasicMaterial( { color: 0xff0000 } );
        this.mesh = new Mesh(this.geometry, this.material);
        this.position.set( 1, 1, 0);

        scene.add(this.mesh);
    }
    
};

export default new Asteroid();