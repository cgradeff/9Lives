// fix the update function

import * as THREE from 'three';
import { GhostCat } from './scene subjects/GhostCat';
import { Background } from './scene subjects/Background';
import { Heart } from './scene subjects/Heart';
import { Trees } from './scene subjects/Trees';
import { Grass } from './scene subjects/Grass';
import { Lights } from './scene subjects/Lights';
import { ThirdPersonCam } from './third_person_cam';

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
        // this.ghostCatObj = this.subjects[0]
        // console.log(this.subjects[2])
        // // this.ghostCat = this.ghostCatObj['ghostCat']
        this.thirdPersonCam = new ThirdPersonCam(this.camera, this.subjects[0].ghostCat);
        // this.ghostCat = new GhostCat(this.scene, this.camera);

        //movement
        this.keyInput();
        this.checkPickUp = false;

        // resize screen and render
        this.onWindowResize();
        this.render();
    }

    // renders and updates the graphics
    render() {
        requestAnimationFrame(this.render.bind(this));

        this.thirdPersonCam.update();
        // document.addEventListener("keydown", this.onDocumentKeyDown(event), false);
        // debugger 
        // this.subjects[2].heart.rotation.x += 0.01;
        // this.subjects[2].heart.rotation.y += 0.01;
        // error in console being called for the first two itterations of the loop cus heart isn't yet defined
        // rotates faster each time the square moves
        // this.subjects[2].heart.rotation.y += 0.02;
        // debugger

        this.renderer.render(this.scene, this.camera)
        // sceneManager.update();
    }

    buildScene() {
        const scene = new THREE.Scene();

        // comment these out to get rid of fog
        // scene.background = new THREE.Color("#0a1226");
        // scene.fog = new THREE.Fog('#0a1226', 3, 20);
        
        
        return scene;
    }

    buildCamera({width, height}) {
        const camera = new THREE.PerspectiveCamera(70, width / height, 0.01, 1000 );

        return camera;
    }

    buildRenderer({width, height}) {
        const renderer = new THREE.WebGLRenderer({antialias: true, alpha: true});
        renderer.setSize(width, height);
        renderer.shadowMap.enabled = true;
        renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  
        document.body.appendChild(renderer.domElement);

        return renderer;
    }

    createSceneSubjects() {
        const ghostCat = new GhostCat(this.scene);
        const background = new Background(this.scene);
        const heart = new Heart(this.scene);
        const forest = new Trees(this.scene);
        const grass = new Grass(this.scene);
        const subjects = [ghostCat, background, heart, forest, grass];
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
            case 38: // down arrow
                this.subjects[0].ghostCat.position.z += zSpeed;
                break;
            case 40: // up arrow
                this.subjects[0].ghostCat.position.z -= zSpeed;
                break;
            case 39: // right arrow
                this.subjects[0].ghostCat.position.x -= xSpeed;
                break;
            case 37: // left arrow
                this.subjects[0].ghostCat.position.x += xSpeed;
                break;
            case 32: // spacebar
                // this.subjects[0].ghostCat.position.set(0, 1, 0);
                this.checkPickUp = true;
                break;
        }
        this.render();
        this.pickupHeart();
    }

    checkCollision() {
        const ghostCatPos = this.subjects[0].ghostCat.position;
        const heartPos = this.subjects[2].heart.position;

        // debugger 

        if ((Math.round(ghostCatPos.x) === Math.round(heartPos.x)) && 
            // (Math.round(ghostCatPos.y) === Math.round(heartPos.y)) && 
            (Math.round(ghostCatPos.z) === Math.round(heartPos.z))) {
            return true;
        }
        return false;
    }

    pickupHeart() {
        if (this.checkCollision() && this.checkPickUp) {
            this.scene.remove(this.subjects[2].heart);
            
            // increment the heart count
            let currentCount = document.getElementById("heartcount").innerHTML;
            document.getElementById("heartcount").innerHTML = parseInt(currentCount) + 1;
        }
     }
}
