//fix the update function


// import * as THREE from 'three';
import {SceneManager} from './scripts/scene_manager.js'
// set up for screenmanager
const canvas = document.getElementById('canvas');
const sceneManager = new SceneManager(canvas);

// handles dom events
bindEventListeners();


// resizeCanvas();


// render loop
render();


function bindEventListeners() {
    window.onresize = resizeCanvas;
	resizeCanvas();	
}

// resizes screen for user
function resizeCanvas() {
    canvas.style.width = '100%';
	canvas.style.height= '100%';
	
	canvas.width = canvas.offsetWidth;
	canvas.height = canvas.offsetHeight;
    
    sceneManager.onWindowResize();

}

// renders and updates the graphics
function render() {
    requestAnimationFrame(render);
    // sceneManager.update();
}