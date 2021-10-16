import * as THREE from 'three';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';


export class Mushroom {
    constructor(scene) {
        this.scene = scene;
        this.loadMushroom();
        this.mushroom;
    }

 
    loadMushroom() {
        let loader = new OBJLoader();

        loader.load( '../../../models/mushrooms.obj', (object) => {
            object.traverse( (child) => {
                if (child instanceof THREE.Mesh) {
                    child.material = new THREE.MeshPhongMaterial( { color: "#ffff"})
                    child.castShadow = true;
                }
            });
            this.scene.add(object);
            this.mushroom = object;
            object.scale.multiplyScalar(0.17);
            object.position.set(-19, 0, 50);
        }); 
    }
}