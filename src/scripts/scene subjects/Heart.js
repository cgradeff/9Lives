import * as THREE from 'three';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';


export class Heart {
    constructor(scene, pos) {
        this.scene = scene;
        // this.heart = this.create();
        this.pos = pos
        this.loadHeart();
        this.heart;
        this.posObj = {
            1: [36, 1, 69, 0],
            2: [45, 1, -5, 2.5],
            3: [-30, 1, 0, 1.7],
            4: [-35, 1, 23, 1],
            5: [55, 1, 10, 0],
            6: [-5, 1, 70, 0],
            7: [0, 1, 90, 0],
            8: [-2, 1, 120, 0],
            9: [45, 1, 60, 0]
        }
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

        loader.load( './models/heart.obj', async (object) => {
            object.traverse( (child) => {
                if (child instanceof THREE.Mesh) {
                    child.material = new THREE.MeshPhongMaterial( { color: "#fc3d7d"})
                    child.castShadow = true;
                }
            });
            await this.scene.add(object);
            this.heart = object;
            object.scale.multiplyScalar(0.01);
            object.position.z = this.posObj[this.pos][2];
            object.position.y = this.posObj[this.pos][1];
            object.position.x = this.posObj[this.pos][0];
        }); 
    }
}

