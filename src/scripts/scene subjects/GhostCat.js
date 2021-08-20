import * as THREE from 'three';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';
// import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader.js';

export class GhostCat {
	constructor(scene) {
		this.scene = scene;
		this.ghostCat = this.create();
		// this.loadGhostCat();
		// this.ghostCat;
	}

	create() {
		const geometry = new THREE.BoxGeometry(2, 2, 2);
        const material = new THREE.MeshLambertMaterial( { color: "#bb37bf"} );
        const ghostCat = new THREE.Mesh( geometry, material );
		ghostCat.castShadow = true;
        this.scene.add( ghostCat );
		ghostCat.position.set(0, 2, 0);

		return ghostCat;
	}

	// loadGhostCat() {
	// 	let loader = new OBJLoader();

    //     loader.load( '../../../models/ghost1.obj', (object) => {
    //         object.traverse( (child) => {
    //             if (child instanceof THREE.Mesh) {
    //                 child.material = new THREE.MeshPhongMaterial( { color: "#6da4d1"})
	// 				child.castShadow = true;
    //             }
    //         });
    //         this.scene.add(object);
    //         this.ghostCat = object;
    //         object.scale.multiplyScalar(0.015);
    //         object.position.set(5, 1, 2);
    //     }); 
	// }

}
