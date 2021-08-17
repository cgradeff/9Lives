// fix the update function

import * as THREE from 'three';
// import { OrbitControls}
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
        this.scene = this.buildScene();
        this.camera = this.buildCamera(this.screenDims);
        this.light = new Lights(this.scene);
        this.renderer = this.buildRenderer(this.screenDims);
        this.subjects = this.createSceneSubjects();
        // this.ghostCat = new GhostCat(this.scene, this.camera);
        this.onWindowResize();
        this.render();
    }

    // renders and updates the graphics
    render() {
        requestAnimationFrame(this.render.bind(this));

        // this.ghostCat.rotation.x += 0.01;
        // this.ghostCat.rotation.y += 0.01;

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
        camera.position.z = 4;
        camera.position.x = 0;
        camera.position.y = 2;

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
        const subjects = [ 
            //list all scene subs here
            new GhostCat(this.scene, this.camera)
            // new Background(this.scene) 
            // new Heart(this.scene, this.camera)
            // new Trees(scene)
        ];
        return subjects;
    }

    // buildLights() {
    //     const light = new THREE.PointLight(0xffffff, 1, 1000);
    //     this.scene.add(light);

    //     light.position.set(0, 10, 0);
    //     return light;
    // }


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

    // movement


    // onDocumentKeyDown(event) {
    //     document.addEventListener("keydown", onDocumentKeyDown, false);

    //     const xSpeed = 0.0001;
    //     const ySpeed = 0.0001;

    //     const keyCode = event.which;
    //         if (keyCode == 87) {
    //             cube.position.y += ySpeed;
    //         } else if (keyCode == 83) {
    //             cube.position.y -= ySpeed;
    //         } else if (keyCode == 65) {
    //             cube.position.x -= xSpeed;
    //         } else if (keyCode == 68) {
    //             cube.position.x += xSpeed;
    //         } else if (keyCode == 32) {
    //             cube.position.set(0, 0, 0);
    //         }
    //     this.render();
    // };
}
