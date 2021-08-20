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
    //     const geometry = new THREE.SphereGeometry( 1, 32, 16 );
    //     const material = new THREE.MeshLambertMaterial( { color: "#6da4d1" } );
    //     const heart = new THREE.Mesh( geometry, material );
    //     this.scene.add( heart );
    //     heart.position.set(3, 2, 0);
    //     heart.castShadow = true;
    //     heart.receiveShadow = false;
    // }

 
    loadHeart() {
        let loader = new OBJLoader();

        loader.load( './models/heart.obj', (object) => {
            object.traverse( (child) => {
                if (child instanceof THREE.Mesh) {
                    child.material = new THREE.MeshPhongMaterial( { color: "#6da4d1"})
                    child.castShadow = true;
                }
            });
            this.scene.add(object);
            this.heart = object;
            object.scale.multiplyScalar(0.015);
            object.position.set(5, 1, 2);
            // object.castShadow = true;
            // object.receiveShadow = false;
        }); 
    }
}

