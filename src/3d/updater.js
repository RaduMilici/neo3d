class Updater {
    constructor(scene, camera, renderer, controls) {
        this.scene = scene;
        this.camera = camera;
        this.renderer = renderer;
        this.controls = controls;
    }

    start() {
        this.animate();
    }

    stop() {

    }

    animate() {
        requestAnimationFrame( this.animate.bind(this) );
        this.renderer.render(this.scene, this.camera);
    }
};

export default Updater;