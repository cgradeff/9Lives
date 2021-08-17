import * as THREE from 'three';

export class GhostCat {
	constructor(scene, camera) {
		this.scene = scene;
		this.camera = camera;
		this.geometry = new THREE.BoxGeometry();
        this.material = new THREE.MeshBasicMaterial( { color: "#bb37bf" } );
        this.ghostCat = new THREE.Mesh( this.geometry, this.material );
		this.buildGhostCat();
	} 

	buildGhostCat() {
 		this.scene.add( this.ghostCat );

        this.camera.position.z = 5;

        return this.ghostCat;
	}
}
