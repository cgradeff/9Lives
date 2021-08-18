import * as THREE from 'three';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';
// import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader.js';
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

// import { heart } from '../../../models/heart.obj'


export class Heart {

    constructor(scene) {
        this.scene = scene;
        // this.heart = this.create();
        this.loader = new OBJLoader();
        this.heart = this.loadHeart();
        // debugger
    }

    // create() {
    //     const geometry = new THREE.SphereGeometry( 0.5, 32, 16 );
    //     const material = new THREE.MeshLambertMaterial( { color: "#6da4d1" } );
    //     const heart = new THREE.Mesh( geometry, material );
    //     this.scene.add( heart );
    //     heart.position.set(3, 1, 0);

    //     return heart;
    // }

    // need to bind and promise
    loadHeart() {
        let heart;
        this.loader.load( '../../../models/heart.obj', (object) => {
            // const material = new THREE.MeshLambertMaterial( { color: "#6da4d1" } );
            this.scene.add(object);
            heart = object;

            heart.scale.multiplyScalar(0.005);
            heart.position.set(3, 1, 0);
            // debugger
        }); 
        debugger
        return heart;
    }
}

