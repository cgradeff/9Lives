import * as THREE from 'three';
// import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';
// import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';


export class Heart {
    // constructor(scene, camera) {
    //     this.scene = scene;
    //     this.camera = camera;
    //     this.loader = new GLTFLoader();
    //     this.heart = this.create();
    // }

    // create() {

    // }

    constructor(scene, camera) {
        this.scene = scene;
        this.camera = camera;
        this.heart = this.create();
    }

    create() {
        const geometry = new THREE.SphereGeometry( 15, 32, 16 );
        const material = new THREE.MeshBasicMaterial( { color: 0xffff00 } );
        const sphere = new THREE.Mesh( geometry, material );
        this.scene.add( sphere );
    }
}