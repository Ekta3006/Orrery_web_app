let scene, camera, renderer, controls;

function init() {
    // Create scene
    scene = new THREE.Scene();

    // Set camera
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    // Create renderer and attach it to the canvas
    renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('orrery'), alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);

    // Add a simple light
    const light = new THREE.HemisphereLight(0xffffff, 0x444444);
    scene.add(light);

    // Optional: Add orbit controls for interactivity
    controls = new THREE.OrbitControls(camera, renderer.domElement);

    // Handle window resize
    window.addEventListener('resize', onWindowResize, false);

    // Animate the scene
    animate();
}

function animate() {
    requestAnimationFrame(animate);

    // Update orbit controls if used
    controls.update();

    // Render the scene
    renderer.render(scene, camera);
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

// Initialize the scene
init();
