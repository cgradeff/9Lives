// fix the update function

import * as THREE from 'three';
// import {OB} from 'node_modules/three/examples/jsm/loaders/OBJLoader.js';
import { ObjectLoader } from 'three';
import { MaterialLoader } from 'three';
// import { GhostCat } from './scene subjects/GhostCat';
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
        this.light = this.buildLights();

        //not sure why this isn't rendering
        // this.ghostCat = this.buildGhostCat();
        this.skybox = this.buildSkyBox();
        // this.heart = this.buildHeart();
        // this.ghostCat = new GhostCat(this.scene, this.camera);
        this.onWindowResize();
        this.render();
    }

    // renders and updates the graphics
    render() {
        requestAnimationFrame(this.render.bind(this));

        this.ghostCat.rotation.x += 0.01;
        this.ghostCat.rotation.y += 0.01;

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

    buildLights() {
        const light = new THREE.PointLight("rgb(255, 255, 255)", 1.4, 1000);
        light.position.set(0, 15, 15);

        this.scene.add( light );

        return light;
    }

    buildGhostCat() {
        const geometry = new THREE.BoxGeometry();
        const material = new THREE.MeshBasicMaterial( { color: "#bb37bf" } );
        const ghostCat = new THREE.Mesh( geometry, material );
        this.scene.add( ghostCat );

        this.camera.position.z = 5;

        return ghostCat;
    }
    // createPathStrings(filename) {
    //     const basePath = "./skybox/";
    //     const baseFilename = basePath + filename;
    //     const fileType = ".png";
    //     const sides = ["ft", "bk", "up", "dn", "rt", "lf"];
    //     const pathStings = sides.map(side => {
    //         return baseFilename + "_" + side + fileType;
    //     });
    //     return pathStings;
    // }

    // buildSkyBox() {
    //     const geometry = new THREE.BoxGeometry(1000, 1000, 1000);
    //     const skybox = new THREE.Mesh( geometry, materialArray );
    //     this.scene.add( skybox );

    //     this.camera.position.z = 5;

    //     return skybox;
    // }

    // buildHeart() {
    //     const MaterialLoader = new THREE.MaterialLoader();
    //     MaterialLoader.load()
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
}
