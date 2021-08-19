import * as THREE from 'three';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';


export class Heart {

    constructor(scene) {
        this.scene = scene;
        // this.heart = this.create();
        this.loadHeart();
        this.heart;
    }

    // create() {
    //     const geometry = new THREE.SphereGeometry( 0.5, 32, 16 );
    //     const material = new THREE.MeshLambertMaterial( { color: "#6da4d1" } );
    //     const heart = new THREE.Mesh( geometry, material );
    //     this.scene.add( heart );
    //     heart.position.set(3, 1, 0);

    //     return heart;
    // }

 
    loadHeart() {
        let loader = new OBJLoader();

        loader.load( '../../../models/heart.obj', (object) => {
            object.traverse( (child) => {
                if (child instanceof THREE.Mesh) {
                    child.material = new THREE.MeshPhongMaterial( { color: "#6da4d1"})
                }
            });
            this.scene.add(object);
            this.heart = object;
            object.scale.multiplyScalar(0.005);
            object.position.set(3, 1, 0);
        }); 
    }
}

