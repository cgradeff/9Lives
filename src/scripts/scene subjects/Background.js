import * as THREE from 'three';

export class Background {
    constructor(scene, camera) {
		this.scene = scene;
		this.camrea = camera;
		this.Background = this.create();
	}

    create() {
        const geometry = new THREE.PlaneGeometry( window.innerWidth, 1000);
        const material = new THREE.MeshPhongMaterial( { color: '#163023' } );
        const ground = new THREE.Mesh( geometry, material );
        ground.material.side = THREE.DoubleSide;
        ground.receiveShadow = true;
        this.scene.add( ground );

        ground.position.set(0, 0, 0);
        ground.rotation.x = -0.5 * Math.PI;


        return ground;
    }
}



