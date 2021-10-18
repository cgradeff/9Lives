import * as THREE from 'three';


export class ThirdPersonCam {
    constructor(camera, target) {
        this.camera = camera;
        this.target = target; // need to set the target to be ghosty
        debugger
        this.curretPos = new THREE.Vector3();
        this.currentLookAt = new THREE.Vector3();
    }

    calcIdealOffset(target) {
        const idealOffset = new THREE.Vector3(-1, 2, -10);
        idealOffset.applyQuaternion(target.quaternion); // need to define target and firgure out what rotation is 
        idealOffset.add(target.position); // figure out setting pos
        return idealOffset;
    }

    // fix lookAt, currently the rotation doesn't work
    calcIdealLookAt(target) {
        const idealLookAt = new THREE.Vector3(0, 10, 50);
        idealLookAt.applyQuaternion(target.quaternion); // need to define target and firgure out what rotation is 
        idealLookAt.add(target.position); // figure out setting pos
        return idealLookAt; 
    }

    update(target) {
        const idealOffset = this.calcIdealOffset(target);
        const idealLookAt = this.calcIdealLookAt(target);

        this.curretPos.copy(idealOffset);
        this.currentLookAt.copy(idealLookAt);
        this.camera.position.copy(this.curretPos);
        this.camera.lookAt(this.currentLookAt);
    }
}