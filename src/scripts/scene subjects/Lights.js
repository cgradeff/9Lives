import * as THREE from 'three';

export class Lights {
    constructor(scene) {
        this.scene = scene;
        this.backlight = this.createBackLight();
        this.frontlight = this.createFrontLight();
    }

    createBackLight() {
        const backLight = new THREE.DirectionalLight(0xffffff, 0.9);
        backLight.position.set(150, 350, 350);
        backLight.castShadow = true;

        backLight.shadow.camera.left = -400;
        backLight.shadow.camera.right = 400;
        backLight.shadow.camera.top = 400;
        backLight.shadow.camera.bottom = -400;
        backLight.shadow.camera.near = 1;
        backLight.shadow.camera.far = 1000;

        backLight.shadow.mapSize.width = 2048;
	    backLight.shadow.mapSize.height = 2048;

        this.scene.add(backLight);

        backLight.position.set(0, 10, 0);
        return backLight;
    }

    createFrontLight() {
        const frontLight = new THREE.HemisphereLight('#5238a1',0x000000, .9);
        // frontLight.castShadow = true;
        this.scene.add(frontLight);
        
        // frontLight.position.set(0, 0, 25);
        return frontLight;
    }
}