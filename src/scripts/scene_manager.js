// fix the update function

import * as THREE from 'three';
import { GhostCat } from './scene subjects/GhostCat';
import { Background } from './scene subjects/Background';
import { Heart } from './scene subjects/Heart';
import { Lights } from './scene subjects/Lights';

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
        this.subjects = this.createSceneSubjects();
        // this.ghostCat = new GhostCat(this.scene, this.camera);

        //movement
        this.keyInput();

        // resize screen and render
        this.onWindowResize();
        this.render();
    }

    // renders and updates the graphics
    render() {
        requestAnimationFrame(this.render.bind(this));

        // error in console being called for the first two itterations of the loop cus heart isn't yet defined
        // rotates faster each time the square moves
        // this.subjects[2].heart.rotation.y += 0.02;
        // debugger

        this.renderer.render(this.scene, this.camera)
        // sceneManager.update();
    }

    buildScene() {
        const scene = new THREE.Scene();
        // scene.background = new THREE.Color("rgb(143, 140, 219)");

        return scene;
    }

    buildCamera({width, height}) {
        const camera = new THREE.PerspectiveCamera(70, width / height, 0.01, 10 );
        camera.position.z = 1;
        camera.position.x = 3;
        camera.position.y = 2;
        // camera.lookAt( this.subjects[0].ghostCat.position );

        return camera;
    }

    buildRenderer({width, height}) {
        const renderer = new THREE.WebGLRenderer({antialias: true, alpha: true});
        renderer.setSize(width, height);
  
        document.body.appendChild(renderer.domElement);

        return renderer;
    }

    createSceneSubjects() {
        const ghostCat = new GhostCat(this.scene, this.camera);
        const background = new Background(this.scene);
        const heart = new Heart(this.scene);
        const subjects = [ghostCat, background, heart];
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
        this.render();
    }

    // movement with key input
    keyInput() {
        document.addEventListener('keydown', (e) => this.onKeyDown_(e), false);
    }

    onKeyDown_(event) {
		const xSpeed = 0.5;
		const zSpeed = 0.5;

        switch (event.keyCode) {
            case 40: // down arrow
                this.subjects[0].ghostCat.position.z += zSpeed;
                break;
            case 38: // up arrow
                this.subjects[0].ghostCat.position.z -= zSpeed;
                break;
            case 37: // right arrow
                this.subjects[0].ghostCat.position.x -= xSpeed;
                break;
            case 39: // left arrow
                this.subjects[0].ghostCat.position.x += xSpeed;
                break;
            case 32: // spacebar
                this.subjects[0].ghostCat.position.set(0, 1, 0);
                break;
        }
        this.render();
        this.pickupHeart();
    }

    checkCollision() {
        const ghostCatPos = this.subjects[0].ghostCat.position;
        const heartPos = this.subjects[2].heart.position;

        if ((Math.round(ghostCatPos.x) === Math.round(heartPos.x)) && 
            (Math.round(ghostCatPos.y) === Math.round(heartPos.y)) && 
            (Math.round(ghostCatPos.z) === Math.round(heartPos.z))) {
            return true;
        }
        return false;
    }

    pickupHeart() {
        if (this.checkCollision()) {
            this.scene.remove(this.subjects[2].heart);
        }
     }
}
