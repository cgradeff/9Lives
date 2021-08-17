import * as THREE from 'three';

export class Lights {
    constructor(scene) {
        this.scene = scene;
        this.backlight = this.createBackLight();
        this.frontlight = this.createFrontLight();
    }

    createBackLight() {
        const backLight = new THREE.PointLight(0xffffff, 1, 1000);
        this.scene.add(backLight);

        backLight.position.set(0, 10, 0);
        return backLight;
    }

    createFrontLight() {
        const frontLight = new THREE.PointLight(0xffffff, 2, 1000);
        this.scene.add(frontLight);
        
        frontLight.position.set(0, 0, 25);
        return frontLight;
    }
}