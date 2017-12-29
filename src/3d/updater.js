class Updater {
    constructor(scene, camera, renderer) {
        this.scene = scene;
        this.camera = camera;
        this.renderer = renderer;
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