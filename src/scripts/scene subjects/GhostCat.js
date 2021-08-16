import * as THREE from 'three';

export class GhostCat {
	constructor(scene) {
		this.scene = scene;
		this.geometry = new THREE.BoxGeometry();
		this.material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
		this.ghostCat = new THREE.Mesh( this.geometry, this.material );
		this.place = this.place();
	}

	place() {
		this.scene.add(this.ghostCat);
		this.ghostCat.position.z = -1490;
	}
}
