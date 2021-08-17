import * as THREE from 'three';

export class Background {
    constructor(scene, camera) {
		this.scene = scene;
		this.camrea = camera;
		this.Background = this.create();
	}

    create() {
        const planeGeometry = new THREE.PlaneGeometry(30, window.innerHeight);
        const groundMaterial = new THREE.MeshLambertMaterial({ color: "#ffe066" });
        const ground = new THREE.Mesh(planeGeometry, groundMaterial);
        this.scene.add( ground );

        ground.position.set(0, 0, 0);
        // ground.rotation.x = -0.5*Math.PI;

        return ground;
    }
}



