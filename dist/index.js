import * as THREE from 'https://unpkg.com/three@0.141.0/build/three.module.js'



// Scene
const canvas = document.querySelector('.webgl')
const scene = new THREE.Scene();

// Change Background Color
scene.background = new THREE.Color(0x1D2025);


const camera = new THREE.PerspectiveCamera(35, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({
    canvas: canvas
});
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// const geometry = new THREE.TorusKnotBufferGeometry(0.4, 0.18);
const geometry = new THREE.DodecahedronBufferGeometry(0.7);
var texture = new THREE.TextureLoader().load('images/normalMap.png')
const material = new THREE.MeshBasicMaterial({
    map: texture
});
const sphere = new THREE.Mesh(geometry, material);
scene.add(sphere);

camera.position.z = 5;

function animate() {
    requestAnimationFrame(animate);
    sphere.rotation.y += 0.003;
    sphere.rotation.x += 0.0015;
    renderer.render(scene, camera);
}
animate();




// Event Listener


addEventListener('resize', () => {

    camera.aspect = innerWidth / innerHeight
    camera.updateProjectionMatrix()

    renderer.setSize(window.innerWidth, window.innerHeight);


})