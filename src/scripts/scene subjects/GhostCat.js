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
		const geometry = new THREE.BoxGeometry(2, 2, 2);
        const material = new THREE.MeshLambertMaterial( { color: "#bb37bf"} );
        const ghostCat = new THREE.Mesh( geometry, material );
		ghostCat.castShadow = true;
        this.scene.add( ghostCat );
		ghostCat.position.set(0, 2, 0);

		return ghostCat;
	}

}
