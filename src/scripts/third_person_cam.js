import * as THREE from 'three';

export class ThirdPersonCam {
    constructor(camera, target) {
        this.camera = camera;
        this.target = target; // need to set the target to be ghosty
        this.curretPos = new THREE.Vector3();
        this.currentLookAt = new THREE.Vector3();
    }

    calcIdealOffset() {
        const idealOffset = new THREE.Vector3(-1, 2, -10);
        idealOffset.applyQuaternion(this.target.quaternion); // need to define target and firgure out what rotation is 
        idealOffset.add(this.target.position); // figure out setting pos
        return idealOffset;
    }

    // fix lookAt, currently the rotation doesn't work
    calcIdealLookAt() {
        const idealLookAt = new THREE.Vector3(0, 10, 50);
        idealLookAt.applyQuaternion(this.target.quaternion); // need to define target and firgure out what rotation is 
        idealLookAt.add(this.target.position); // figure out setting pos
        return idealLookAt;
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