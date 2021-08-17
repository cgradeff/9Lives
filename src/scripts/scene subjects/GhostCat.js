import * as THREE from 'three';
// import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';
// import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader.js';

export class GhostCat {
	constructor(scene, camera) {
		this.scene = scene;
		this.camera = camera;
		this.ghostCat = this.create();
	}

	create() {
		const geometry = new THREE.BoxGeometry();
        const material = new THREE.MeshLambertMaterial( { color: "#bb37bf"} );
        const ghostCat = new THREE.Mesh( geometry, material );
        this.scene.add( ghostCat );

        this.camera.position.z = 5;

		return ghostCat;
	}

}
