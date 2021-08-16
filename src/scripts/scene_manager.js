import * as THREE from 'three';
import Lights from './scene subjects/Lights'
// this is what I'm having issues with

// three js basic world set up


export class SceneManager {
    constructor(canvas) {
        this.screenDims = {
            width: canvas.width,
            height: canvas.height
        };
        this.scene = this.buildScene();
        this.camera = this.buildCamera(this.screenDims);
        this.renderer = this.buildRenderer(this.screenDims);
        // this.subjects = this.createSceneSubjects(this.scene);
        this.canvas = canvas;
    }

    buildScene() {
        const scene = new THREE.Scene();
        scene.background = new THREE.Color(0xff0000);

        return scene;
    }

    buildCamera({width, height}) {
        const aspectRatio = width / height;
        const fieldOfView = 60;
        const nearPlane = 1;
        const farPlane = 100; 
        const camera = new THREE.PerspectiveCamera(fieldOfView, aspectRatio, nearPlane, farPlane);

        return camera;
    }

    buildRenderer({width, height}) {
        const renderer = new THREE.WebGLRenderer({antialias: true});
        renderer.setSize(width, height);
        document.body.appendChild(renderer.domElement);

        return renderer;
    }

    createSceneSubjects(scene) {
        const subjects = [ 
            // new Lights(scene), // scene subject
            // new GhostCat(scene), //list all scene subs here
            // new Trees(scene)
        ];
        return subjects;
    }

    // update() {
    //     for (let i = 0; i < this.subjects.length; i++) {
    //         this.subjects[i].update();
    //     }
            
    //     this.renderer.render(this.scene, this.camera);
    // }

    onWindowResize() {
        const { width, height } = this.canvas;
        this.screenDims.width = width;
        this.screenDims.height = height;
        this.camera.aspect = width / height;
        this.camera.updateProjectionMatrix(); 
        this.renderer.setSize(width, height); 
    }
}
// function SceneManager(canvas) {
//     const screenDims = {
//         width: canvas.width,
//         height: canvas.height
//     }

//     const scene = buildScene();
//     const camera = buildCamera(screenDims);
//     const renderer = buildRenderer(screenDims);
//     const subjects = createSceneSubjects(scene);

//     function buildScene() {
//         const scene = new THREE.Scene();
//         scene.background = new THREE.Color("#4287f5");

//         return scene;
//     }

//     function buildCamera({width, height}) {
//         const aspectRatio = width / height;
//         const fieldOfView = 60;
//         const nearPlane = 1;
//         const farPlane = 100; 
//         const camera = new THREE.PerspectiveCamera(fieldOfView, aspectRatio, nearPlane, farPlane);

//         return camera;
//     }

//     function buildRenderer({width, height}) {
//         const renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true, alpha: true }); 
//         renderer.setSize(width, height);

//         return renderer;
//     }

//     // creates arr of scene subjects, need to add new subjects to this arr 
//     function createSceneSubjects(scene) {
//         const subjects = [ 
//             new Lights(scene), // scene subject
//             new GhostCat(scene), //list all scene subs here
//             new Trees(scene)
//         ];
//         return subjects;
//     }

// // public methods to update the scene and resize the screen

//     // called by main at every frame 
//     this.update = function() {
//         for (let i = 0; i < subjects.length; i++) {
//             subjects[i].update();
//         }
            
//         renderer.render(scene, camera);
//     }

//     // updates the aspect ratio of the camera and the size of the Renderer, called by main each time window is resized
//     this.onWindowResize = function() {
//         const { width, height } = canvas;
//         screenDims.width = width;
//         screenDims.height = height;
//         camera.aspect = width / height;
//         camera.updateProjectionMatrix(); // need func
//         renderer.setSize(width, height); // need func
//     }
// }

