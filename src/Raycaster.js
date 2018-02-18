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
        this.mouse.x = ( event.clientX / this.container.clientWidth ) * 2 - 1;
        this.mouse.y = - ( event.clientY / this.container.clientHeight ) * 2 + 1;
        this.raycaster.setFromCamera( this.mouse, this.camera );
        const intersects = this.raycaster.intersectObjects(this.onClickEntityes, false);
        if (intersects) {
            return intersects;
        }
      }

}
export default _Raycaster;