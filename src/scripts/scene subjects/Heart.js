import * as THREE from 'three';
// import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';
// import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader.js';
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';


export class Heart {
    constructor(scene) {
        this.scene = scene;
        this.heart = this.create();
    }

    create() {
        const geometry = new THREE.SphereGeometry( 1, 32, 16 );
        const material = new THREE.MeshLambertMaterial( { color: "#6da4d1" } );
        const heart = new THREE.Mesh( geometry, material );
        this.scene.add( heart );
        heart.position.set(3, 2, 0);
        heart.castShadow = true;
        heart.receiveShadow = false;

        return heart;
    }
}