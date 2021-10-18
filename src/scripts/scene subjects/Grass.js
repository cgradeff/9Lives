import * as THREE from 'three';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';


export class Grass {
    constructor(scene) {
        this.scene = scene;
        this.loadGrass();
        this.grass;
    }

 
    loadGrass() {
        let loader = new OBJLoader();

        loader.load( './models/grass.obj', (object) => {
            object.traverse( (child) => {
                if (child instanceof THREE.Mesh) {
                    child.material = new THREE.MeshPhongMaterial( { color: "#076e38"})
                    child.castShadow = true;
                }
            });
            this.scene.add(object);
            this.grass = object;
            object.scale.multiplyScalar(0.17);
            object.position.set(-19, 0, 50);
        }); 
    }
}