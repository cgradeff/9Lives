import * as THREE from 'three';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';
// import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader.js';


export class Heart {

    constructor(scene) {
        this.scene = scene;
        // this.heart = this.create();
        this.loader = new OBJLoader();
        this.loadHeart();
        this.heart;
        // this.heart.material = new THREE.MeshLambertMaterial( { color: "#6da4d1" } );
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

 
    loadHeart() {

        this.loader.load( '../../../models/heart.obj', (object) => {
            this.scene.add(object);
            this.heart = object;
            object.scale.multiplyScalar(0.005);
            object.position.set(3, 1, 0);
            // object.material = new THREE.MeshBasicMaterial();
            // object.material.color = "#6da4d1";
            // debugger
        }); 
        // debugger
        // return heart;
    }
}

