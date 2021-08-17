import * as THREE from 'three';

export class Background {
    constructor(scene, camera) {
		this.scene = scene;
		this.camrea = camera;
		this.Background = this.create();
	}

    create() {
        const geometry = new THREE.PlaneGeometry( 1000, 1000, 1, 1 );
        const material = new THREE.MeshBasicMaterial( { color: '#6ce69f' } );
        const ground = new THREE.Mesh( geometry, material );
        ground.material.side = THREE.DoubleSide;
        this.scene.add( ground );

        ground.position.set(0, -10, -505);
        ground.rotation.x = 90;

        return ground;
    }
}



