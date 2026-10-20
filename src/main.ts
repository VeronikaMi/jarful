import * as THREE from "three";

const canvas = document.getElementById("three")!;
const scene = new THREE.Scene();

const camera = new THREE.Camera();

const cube = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial(),
);

scene.add(cube);

const renderer = new THREE.WebGLRenderer({ canvas });
renderer.render(scene, camera);
