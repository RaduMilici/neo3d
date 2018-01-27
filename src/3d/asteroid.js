import { SphereGeometry, MeshBasicMaterial, Mesh, Object3D } from 'three';

class Asteroid extends Object3D {
    constructor (pos) {
        super();
        this.geometry = null;
        this.material = null;
        this.mesh = null;
        this.pos = pos;
        this.addAsteroid();
    }
    
    addAsteroid() {
        this.geometry = new SphereGeometry(0.2, 20, 20 );
        this.material = new MeshBasicMaterial({ color: 0xff0000 });
        this.mesh = new Mesh(this.geometry, this.material);
        this.add(this.mesh);
        this.position.copy(this.pos);
    }
};

export default Asteroid;