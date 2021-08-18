import * as THREE from 'three';

class ThirdPersonCam {
    constructor(camera, target) {
        this.camera = camera;
        this.target = target; // need to set the larget to be ghosty
        this.curretPos = new THREE.Vector3();
        this.currentLookAt = new THREE.Vector3();
    }

    calcIdealOffset() {
        const idealOffset = new THREE.Vector3(-15, 20, -30);
        idealOffset.applyQuaternion(this.target.Rotation); // need to define target and firgure out what rotation is 
        idealOffset.add(this.target.position); // figure out setting pos
        return idealOffset;
    }

    calcIdealOffset() {
        const idealLookAt = new THREE.Vector3(0, 10, 50);
        idealOffset.applyQuaternion(this.target.Rotation); // need to define target and firgure out what rotation is 
        idealOffset.add(this.target.position); // figure out setting pos
        return idealOffset;
    }

    update() {
        const idealOffset = this.calcIdealOffset();
        const idealLookAt = this.calcIdealLookAt();

        this.curretPos.copy(idealOffset);
        this.currentLookAt.copy(idealLookAt);
        this.camera.position.copy(this.curretPos);
        this.camera.lookAt(this.currentLookAt);
    }
}