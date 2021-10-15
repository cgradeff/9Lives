import * as THREE from 'three';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';


export class Trees {
    constructor(scene, pos) {
        this.scene = scene;
        this.pos = pos;
        // this.trees = this.create();
        this.loadTrees();
        this.trees;
        // this.posObj = {
        //     1: [20, 0, 10, 0],
        //     2: [-25, 0, -1, 2.5],
        //     3: [-18, 0, 15, 1.7],
        //     4: [2, 0, 33, 1],
        //     5: [37, 0, 33, 0]
        // }
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

        loader.load( '../../../models/forest.obj', (object) => {
            object.traverse( (child) => {
                if (child instanceof THREE.Mesh) {
                    child.material = new THREE.MeshPhongMaterial( { color: "#075f61"})
                    child.castShadow = true;
                }
            });
            this.scene.add(object);
            this.trees = object;
            object.scale.multiplyScalar(0.17);
            object.position.set(-19, 0, 50);
            // object.position.z = this.posObj[this.pos][2];
            // object.position.y = this.posObj[this.pos][1];
            // object.position.x = this.posObj[this.pos][0];
            // const yDiff = this.posObj[this.pos][3]
            // object.rotation.set( 0, yDiff, 0 );
            // object.quaternion.x = this.posObj[this.pos][3]
            // object.castShadow = true;
            // object.receiveShadow = false;
        }); 
    }
}

