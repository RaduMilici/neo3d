import { SphereGeometry, MeshBasicMaterial, Mesh, Object3D } from 'three';

class Asteroid extends Object3D {
    constructor (pos, scale) {
        super();
        this.geometry = null;
        this.material = null;
        this.mesh = null;
        this.pos = pos;
        this.meshScale = this.getMeanScale(scale);
        this.addAsteroid();
        console.log(this.scale);
    }
    
    getMeanScale(scale) {
        let mean = (scale.estimated_diameter_max + scale.estimated_diameter_min) / 2;
        console.log(mean);
        return mean;
    }

    addAsteroid() {
        this.geometry = new SphereGeometry(0.2, 20, 20 );
        this.material = new MeshBasicMaterial({ color: 0xff0000 });
        this.mesh = new Mesh(this.geometry, this.material);
        this.add(this.mesh);
        this.position.copy(this.pos);
        this.scale.copy({x: this.meshScale, y: this.meshScale, z: this.meshScale});
    }
};

export default Asteroid;