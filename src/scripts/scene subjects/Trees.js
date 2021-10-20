import * as THREE from 'three';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';


export class Trees {
    constructor(scene) {
        this.scene = scene;
        // this.trees = this.create();
        this.loadTrees();
        this.trees;
    }

    // create() {
    //     const geometry = new THREE.SphereGeometry( 1, 32, 16 );
    //     const material = new THREE.MeshLambertMaterial( { color: "#6da4d1" } );
    //     const trees = new THREE.Mesh( geometry, material );
    //     this.scene.add( trees );
    //     trees.position.set(3, 2, 0);
    //     trees.castShadow = true;
    //     trees.receiveShadow = false;
    // }

 
    loadTrees() {
        let loader = new OBJLoader();

        loader.load( './models/forest.obj', (object) => {
            object.traverse( (child) => {
                if (child instanceof THREE.Mesh) {
                    child.material = new THREE.MeshPhongMaterial( { color: "#075f61"})
                    child.castShadow = true;
                }
            });
            this.scene.add(object);
            this.trees = object;
            object.scale.multiplyScalar(0.18);
            object.position.set(-19, 0, 50);
        }); 
    }
}

