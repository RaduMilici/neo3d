import { Scene, SphereGeometry, MeshBasicMaterial, Mesh, Vector3, Matrix4, Vector4, Object3D } from 'three';

class Asteroid extends Object3D {
    constructor () {
        super();
        this.geometry = null;
        this.material = null;
        this.mesh = null;
        this.pos = pos;
        this.currentPos = null;
        this.rotationMatrix = null;
        let newPos = null;
        this.addAsteroid();
    }
    
    addAsteroid() {
        this.geometry = new SphereGeometry(0.2, 20, 20 );
        this.material = new MeshBasicMaterial( { color: 0xff0000 } );
        this.mesh = new Mesh(this.geometry, this.material);
        //this.mesh.position.copy(this.pos);
    }

    // rotateAboutWorldAxis(object, axis, angle) {
    //     this.rotationMatrix = new Matrix4();
    //     this.rotationMatrix.makeRotationAxis( axis.normalize(), angle );
    //     this.currentPos = new Vector4(object.position.x, object.position.y, object.position.z, 1.5);
    //     this.newPos = this.currentPos.applyMatrix4(this.rotationMatrix);
    //     object.position.x = this.newPos.x;
    //     object.position.y = this.newPos.y;
    //     object.position.z = this.newPos.z;
    // }
    
};

export default Asteroid;