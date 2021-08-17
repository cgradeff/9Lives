// fix the update function

import * as THREE from 'three';
// import {GhostCat} from './scene subjects/GhostCat';


// three js basic world set up

export class SceneManager {
    constructor() {
        this.screenDims = {
            width: window.innerWidth,
            height: window.innerHeight
        };
        this.scene = this.buildScene();
        this.camera = this.buildCamera(this.screenDims);
        this.renderer = this.buildRenderer(this.screenDims);
        // this.subjects = this.createSceneSubjects(this.scene);
        this.light = this.buildLights(this.scene);

        //not sure why this isn't rendering
        this.ghostCat = this.buildGhostCat();
        this.onWindowResize();
        this.render();
    }

    // renders and updates the graphics
    render() {
        requestAnimationFrame(this.render.bind(this));
        this.renderer.render(this.scene, this.camera)
    // sceneManager.update();
    }

    buildScene() {
        const scene = new THREE.Scene();
        // scene.background = new THREE.Color(0xff0000);

        return scene;
    }

    buildCamera({width, height}) {
        // const aspectRatio = width / height;
        // const fieldOfView = 60;
        // const nearPlane = 1;
        // const farPlane = 100; 
        // const camera = new THREE.PerspectiveCamera(fieldOfView, aspectRatio, nearPlane, farPlane);

        const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 100);
        // camera.position.x = 0;
        // camera.position.y = 0;
        // camera.position.z = 2;
        // this.scene.add(camera);

        return camera;
    }

    buildRenderer({width, height}) {
        const renderer = new THREE.WebGLRenderer({antialias: true});
        renderer.setSize(width, height);
        // debugger 
        document.body.appendChild(renderer.domElement);

        return renderer;
    }

    // createSceneSubjects(scene) {
    //     // const subjects = [ 
            
    //     //     new GhostCat(scene) //list all scene subs here
    //     //     // new Trees(scene)
    //     // ];
    //     const subjects = new GhostCat(scene);
    //     return subjects;
    // }

    buildLights(scene) {
        const light = new THREE.HemisphereLight(0x202020, 0x004080, 0.6);
        scene.add(light);
        return light;
    }

    buildGhostCat() {
        const geometry = new THREE.BoxGeometry();
        const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
        const ghostCat = new THREE.Mesh( geometry, material );
        this.scene.add( ghostCat );

        this.camera.position.z = 5;
        return ghostCat;
    }

// public methods to update the scene and resize the screen
     // called by main at every frame 
    // update() {
    //     for (let i = 0; i < this.subjects.length; i++) {
    //         this.subjects[i].update();
    //     }
            
    //     this.renderer.render(this.scene, this.camera);
    // }

 // updates the aspect ratio of the camera and the size of the Renderer,
    onWindowResize() {
        const { width, height } = this.screenDims;
        this.camera.aspect = width / height;
        this.camera.updateProjectionMatrix(); 
        this.renderer.setSize(width, height); 
    }
}
