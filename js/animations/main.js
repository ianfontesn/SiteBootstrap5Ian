// import * as THREE from 'three';
// import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
// import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

// const container = document.getElementById('renderContainer');
// const scene = new THREE.Scene();
// const camera = new THREE.PerspectiveCamera(30, container.clientWidth / container.clientHeight, 0.1, 1000);
// const renderer = new THREE.WebGLRenderer();
// const controls = new OrbitControls(camera, renderer.domElement);


// renderer.setClearColor(0x000000, 0);
// renderer.setSize(container.clientWidth, container.clientHeight);
// container.appendChild(renderer.domElement);
// camera.position.z = 5;
// controls.enableZoom = false;
// controls.enablePan = false;


// const loader = new GLTFLoader();

// let gltf;
// loader.load('assets/3D/quest2model/Oculus.glb', function (loadedGltf) {
//     gltf = loadedGltf;
//     scene.add(gltf.scene);
// }, undefined, function (error) {
//     console.error(error);
// });

// function animate() {
//     requestAnimationFrame(animate);
//     controls.update();
//     renderer.render(scene, camera);
// }
// animate();

// // Atualiza o tamanho do renderer quando a janela é redimensionada
// window.addEventListener('resize', function () {
//     camera.aspect = container.clientWidth / container.clientHeight;
//     camera.updateProjectionMatrix();
//     renderer.setSize(container.clientWidth, container.clientHeight);
//     renderer.setPixelRatio(window.devicePixelRatio);

//     // Reposiciona a câmera

// }, false);