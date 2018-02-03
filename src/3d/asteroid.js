import { SphereGeometry, MeshBasicMaterial, Mesh, Object3D } from 'three';

class Asteroid extends Object3D {
    constructor (pos, scale) {
        super();
        this.geometry = null;
        this.material = null;
        this.mesh = null;
        this.pos = pos;
        this.meshScale = this.getMeanScale(scale);
        this
        this.addAsteroid();
    }
    
    getMeanScale(scale) {
    this.scaleMin = scale;
    }

    addAsteroid() {
        this.geometry = new SphereGeometry(0.2, 20, 20 );
        this.material = new MeshBasicMaterial({ color: 0xff0000 });
        this.mesh = new Mesh(this.geometry, this.material);
        this.add(this.mesh);
        this.position.copy(this.pos);
        this.scale.copy(this.meshScale);
    }
};

export default Asteroid;