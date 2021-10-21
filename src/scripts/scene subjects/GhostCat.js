import * as THREE from 'three';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';
// import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader.js';

export class GhostCat {
	constructor(scene) {
		this.scene = scene;
		// this.ghostCat = this.create();
		this.loadGhostCat();
		this.ghostCat;
	}

	// create() {
	// 	const geometry = new THREE.BoxGeometry(2, 2, 2);
    //     const material = new THREE.MeshLambertMaterial( { color: "#bb37bf"} );
    //     const ghostCat = new THREE.Mesh( geometry, material );
	// 	ghostCat.castShadow = true;
    //     this.scene.add( ghostCat );
	// 	ghostCat.position.set(0, 2, 0);
	// create() {
	// 	const geometry = new THREE.BoxGeometry(2, 2, 2);
    //     const material = new THREE.MeshLambertMaterial( { color: "#6da4d1"} );
    //     const ghostCat = new THREE.Mesh( geometry, material );
	// 	ghostCat.castShadow = true;
    //     this.scene.add( ghostCat );
	// 	ghostCat.position.set(0, 2, 0);

	// 	return ghostCat;
	// }

	loadGhostCat() {
		let loader = new OBJLoader();

        loader.load( './models/ghostCat.obj', async (object) => {
            object.traverse( (child) => {
                if (child instanceof THREE.Mesh) {
                    child.material = new THREE.MeshPhongMaterial( { color: "#fdffdb"})
					child.castShadow = true;
					child.material.transparent = true;
					child.material.opacity = 0.7; 
                }
            });
            await this.scene.add(object);
            this.ghostCat = object;
			object.scale.multiplyScalar(.15);
            object.position.set(0, .3, 0);
			object.rotation.set( 0, 0, 0 )
        }, function ( xhr ) {

		// console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );

	}); 
	}

}
