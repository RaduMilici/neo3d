import { Raycaster, Vector2 } from 'three';

class _Raycaster {
    constructor (camera, container) { 
        this.mouse = new Vector2();
        this.camera = camera;
        this.raycaster = new Raycaster();
        this.onClickEntityes = [];
        this.container = container;
    }

    cast(event) {
        var bounds = event.target.getBoundingClientRect();
        var x = event.clientX - bounds.left;
        var y = event.clientY - bounds.top;
        this.mouse.x = (x / this.container.clientWidth) * 2 - 1;
        this.mouse.y = -(y / this.container.clientHeight) * 2 + 1;
        this.raycaster.setFromCamera( this.mouse, this.camera );
        const meshes = this.onClickEntityes.map(entity => entity.mesh);
        return this.raycaster.intersectObjects(meshes);
      }

}
export default _Raycaster;