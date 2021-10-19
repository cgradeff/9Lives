// fix the update function

import * as THREE from 'three'
import { GhostCat } from './scene subjects/GhostCat'
import { Background } from './scene subjects/Background'
import { Heart } from './scene subjects/Heart'
import { Trees } from './scene subjects/Trees'
import { Grass } from './scene subjects/Grass'
import { Mushroom } from './scene subjects/Mushrooms'
import { Lights } from './scene subjects/Lights'
import { ThirdPersonCam } from './third_person_cam'

// three js basic set up

export class SceneManager {
  constructor() {
    this.screenDims = {
      width: window.innerWidth,
      height: window.innerHeight,
    }

    // building scene and objects
    this.scene = this.buildScene()
    this.camera = this.buildCamera(this.screenDims)
    this.light = new Lights(this.scene)
    this.renderer = this.buildRenderer(this.screenDims)
    this.subjects = this.createSceneSubjects()
    this.hearts = this.createHearts()
    this.ghostCat = new GhostCat(this.scene)
    this.thirdPersonCam = new ThirdPersonCam(this.camera) 

    //movement
    this.keyInput()
    this.checkPickUp = false

    // resize screen and render
    this.onWindowResize()
    this.render()
  }

  // renders and updates the graphics
  render() {
    requestAnimationFrame(this.render.bind(this))

    if (this.ghostCat.ghostCat !== undefined) {
      this.thirdPersonCam.update(this.ghostCat.ghostCat)
    }

    // heart rotation
    if (this.hearts[0].heart !== undefined) {
      this.hearts[0].heart.rotation.y += 0.01
      this.hearts[1].heart.rotation.y += 0.01
      this.hearts[2].heart.rotation.y += 0.01
      this.hearts[3].heart.rotation.y += 0.01
      this.hearts[4].heart.rotation.y += 0.01
      this.hearts[5].heart.rotation.y += 0.01
      this.hearts[6].heart.rotation.y += 0.01
      this.hearts[7].heart.rotation.y += 0.01
      this.hearts[8].heart.rotation.y += 0.01
    }

    this.renderer.render(this.scene, this.camera)
  }

  buildScene() {
    const scene = new THREE.Scene()

    // comment these out to get rid of fog
    // scene.background = new THREE.Color("#ffffff");
    // scene.fog = new THREE.Fog('#ffffff', 20, 20);

    return scene
  }

  buildCamera({ width, height }) {
    const camera = new THREE.PerspectiveCamera(70, width / height, 0.01, 1000)

    return camera
  }

  buildRenderer({ width, height }) {
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setSize(width, height)
    renderer.shadowMap.enabled = true
    renderer.shadowMap.type = THREE.PCFSoftShadowMap

    document.body.appendChild(renderer.domElement)

    return renderer
  }

  createSceneSubjects() {
    // const ghostCat = new GhostCat(this.scene);
    const background = new Background(this.scene)
    const forest = new Trees(this.scene)
    const grass = new Grass(this.scene)
    const mushroom = new Mushroom(this.scene)
    const subjects = [background, forest, grass, mushroom] //ghostCat
    return subjects
  }

  createHearts() {
    const heart1 = new Heart(this.scene, 1)
    const heart2 = new Heart(this.scene, 2)
    const heart3 = new Heart(this.scene, 3)
    const heart4 = new Heart(this.scene, 4)
    const heart5 = new Heart(this.scene, 5)
    const heart6 = new Heart(this.scene, 6)
    const heart7 = new Heart(this.scene, 7)
    const heart8 = new Heart(this.scene, 8)
    const heart9 = new Heart(this.scene, 9)
    const hearts = [
      heart1,
      heart2,
      heart3,
      heart4,
      heart5,
      heart6,
      heart7,
      heart8,
      heart9,
    ]
    return hearts
  }

  // updates the aspect ratio of the camera and the size of the Renderer,
  onWindowResize() {
    const { width, height } = this.screenDims
    this.camera.aspect = width / height
    this.camera.updateProjectionMatrix()
    this.renderer.setSize(width, height)
    this.render()
  }

  // movement with key input
  keyInput() {
    document.addEventListener('keydown', (e) => this.onKeyDown_(e), false)
  }

  onKeyDown_(event) {
    const xSpeed = 0.5
    const zSpeed = 0.5

    switch (event.keyCode) {
      case 38: // down arrow
        this.ghostCat.ghostCat.position.z += zSpeed
        break
      case 40: // up arrow
        this.ghostCat.ghostCat.position.z -= zSpeed
        break
      case 39: // right arrow
        this.ghostCat.ghostCat.position.x -= xSpeed
        break
      case 37: // left arrow
        this.ghostCat.ghostCat.position.x += xSpeed
        break
      case 32: // spacebar
        // this.subjects[0].ghostCat.position.set(0, 1, 0);
        this.checkPickUp = true
        break
    }
    // this.render();
    this.pickupHeart()
  }

  checkCollision() {
    const ghostCatPos = this.ghostCat.ghostCat.position
    // const heartPos = this.subjects[2].heart.position;
    const hearts = this.hearts
    let collision = null
    // console.log(hearts)
    // debugger
    hearts.forEach((heart) => {
      // console.log(heart.heart.position)
      if (
        Math.round(ghostCatPos.x) === Math.round(heart.heart.position.x) &&
        // (Math.round(ghostCatPos.y) === Math.round(heartPos.y)) &&
        Math.round(ghostCatPos.z) === Math.round(heart.heart.position.z)
      ) {
        collision = heart
        // return heart;
      }
    })
    // console.log(collision)
    return collision
  }

  pickupHeart() {
    let heart = this.checkCollision()
    // console.log(heart)
    if (heart !== null && this.checkPickUp) {
      const heartIdx = this.hearts.indexOf(heart)
      this.scene.remove(this.hearts[heartIdx].heart)

      // increment the heart count
      let currentCount = document.getElementById('heartcount').innerHTML
      document.getElementById('heartcount').innerHTML =
        parseInt(currentCount) + 1
      this.checkPickUp = false
    }
    this.checkPickUp = false
  }

  win() {
    const currentCount = document.getElementById('heartcount').innerHTML
    return parseInt(currentCount) === 2 ? true : false
  }
}
