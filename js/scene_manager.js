
// three js basic world set up
function SceneManager(canvas) {
    const screenDims = {
        width: canvas.width,
        height: canvas.height
    }

    const scene = buildScene();
    const camera = buildCamera(screenDims);
    const renderer = buildRenderer(screenDims);
    const subjects = createSceneSubjects(scene);

    function buildScene() {
        const scene = new THREE.Scene();
        scene.background = new THREE.Color("#4287f5");

        return scene;
    }

    function buildCamera({width, height}) {
        const aspectRatio = width / height;
        const fieldOfView = 60;
        const nearPlane = 1;
        const farPlane = 100; 
        const camera = new THREE.PerspectiveCamera(fieldOfView, aspectRatio, nearPlane, farPlane);

        return camera;
    }

    function buildRenderer({width, height}) {
        const renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true, alpha: true }); 
        renderer.setSize(width, height);

        return renderer;
    }

    // creates arr of scene subjects, need to add new subjects to this arr 
    function createSceneSubjects(scene) {
        const subjects = [ 
            new Lights(scene), // scene subject
            new GhostCat(scene), //list all scene subs here
            new Trees(scene)
        ];
        return subjects;
    }

// public methods to update the scene and resize the screen

    // called by main at every frame 
    this.update = function() {
        for (let i = 0; i < subjects.length; i++) {
            subjects[i].update();
        }
            
        renderer.render(scene, camera);
    }

    // updates the aspect ratio of the camera and the size of the Renderer, called by main each time window is resized
    this.onWindowResize = function() {
        const { width, height } = canvas;
        screenDims.width = width;
        screenDims.height = height;
        camera.aspect = width / height;
        camera.updateProjectionMatrix(); // need func
        renderer.setSize(width, height); // need func
    }
}