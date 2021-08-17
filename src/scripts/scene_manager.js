// fix the update function

import * as THREE from 'three';
// import { OrbitControls}
import { GhostCat } from './scene subjects/GhostCat';
import { Background } from './scene subjects/Background';
import { Heart } from './scene subjects/Heart';
import { Lights } from './scene subjects/Lights';

// document.addEventListener("keydown", onDocumentKeyDown, false);
// three js basic set up

export class SceneManager {
    
    constructor() {
        this.screenDims = {
            width: window.innerWidth,
            height: window.innerHeight
        };
        // building scene and objects
        this.scene = this.buildScene();
        this.camera = this.buildCamera(this.screenDims);
        this.light = new Lights(this.scene);
        this.renderer = this.buildRenderer(this.screenDims);
        // this.subjects = this.createSceneSubjects();
        this.ghostCat = new GhostCat(this.scene, this.camera);

        //movement
        this.keyInput();

        // resize screen and render
        this.onWindowResize();
        this.render();
    }

    // renders and updates the graphics
    render() {
        requestAnimationFrame(this.render.bind(this));

        // document.addEventListener("keydown", this.onDocumentKeyDown(event), false);
        // debugger 
        this.ghostCat.ghostCat.rotation.x += 0.01;
        this.ghostCat.ghostCat.rotation.y += 0.01;

        this.renderer.render(this.scene, this.camera)
    // sceneManager.update();
    }

    buildScene() {
        const scene = new THREE.Scene();
        scene.background = new THREE.Color("rgb(143, 140, 219)");

        return scene;
    }

    buildCamera({width, height}) {
        // const aspectRatio = width / height;
        // const fieldOfView = 60;
        // const nearPlane = 1;
        // const farPlane = 100; 
        // const camera = new THREE.PerspectiveCamera(fieldOfView, aspectRatio, nearPlane, farPlane);

        const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
        // camera.position.x = 0;
        // camera.position.y = 0;
        // camera.position.z = 2;
        // this.scene.add(camera);
        camera.position.z = 2;
        camera.position.x = 2;
        camera.position.y = 1;

        return camera;
    }

    buildRenderer({width, height}) {
        const renderer = new THREE.WebGLRenderer({antialias: true});
        renderer.setSize(width, height);
        // debugger 
        document.body.appendChild(renderer.domElement);

        return renderer;
    }

    createSceneSubjects() {
        const ghostCat = new GhostCat(this.scene, this.camera);
        const background = new Background(this.scene);
        const subjects = [ghostCat, background];
        return subjects;
    }


// need to change this to actually work
    update() {  
        this.renderer.render(this.scene, this.camera);
    }

 // updates the aspect ratio of the camera and the size of the Renderer,
    onWindowResize() {
        const { width, height } = this.screenDims;
        this.camera.aspect = width / height;
        this.camera.updateProjectionMatrix(); 
        this.renderer.setSize(width, height); 
        // this.update();
    }


    keyInput() {
        document.addEventListener('keydown', (e) => this.onKeyDown_(e), false);
    }

    onKeyDown_(event) {
		const xSpeed = 0.5;
		const ySpeed = 0.5;
        // debugger
        switch (event.keyCode) {
            case 38:
                this.ghostCat.ghostCat.position.y += ySpeed;
                break;
            case 40:
                this.ghostCat.ghostCat.position.y -= ySpeed;
                break;
            case 37:
                this.ghostCat.ghostCat.position.x -= xSpeed;
                break;
            case 39:
                this.ghostCat.ghostCat.position.x += xSpeed;
                break;
            case 32:
                this.ghostCat.ghostCat.position.set(0, 0, 0);
                break;
        }
        this.render();
    }


}
