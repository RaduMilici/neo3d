import { Object3D, SphereGeometry, MeshBasicMaterial, Mesh, TextureLoader } from 'three';
import mapUrl from '../textures/earth.png';

class Earth extends Object3D {
  constructor() {
    super();
    const loader = new TextureLoader();
    const geometry = new SphereGeometry(150, 50, 50);
    const map = loader.load(mapUrl);
    const material = new MeshBasicMaterial({ map });
    this.mesh = new Mesh(geometry, material);
    this.add(this.mesh);
  }
}

export default Earth;
