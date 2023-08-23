// Script permettant de créer un fond d'écran animé avec des sphères de couleur et une caméra qui tourne autour

const container = document.getElementById("particles-js");
const scene = new THREE.Scene();
let isLightMode = false;

scene.background = new THREE.Color(isLightMode ? 0xffffff : 0x212121);

const camera = new THREE.PerspectiveCamera(
	75,
	container.clientWidth / container.clientHeight,
	0.1,
	1000
);

camera.position.z = 5;

const renderer = new THREE.WebGLRenderer();
renderer.setSize(container.clientWidth, container.clientHeight);
container.appendChild(renderer.domElement);

// Création des sphères blanche
const spheresGeometry = new THREE.BufferGeometry();
const spheresMaterial = new THREE.MeshBasicMaterial({
	color: 0xffffff,
	transparent: true
});

const numSpheres = 1000;
const positions = new Float32Array(numSpheres * 3);
for (let i = 0; i < numSpheres * 3; i++) {
	positions[i] = (Math.random() - 0.5) * 10;
}
spheresGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

const spheres = new THREE.InstancedMesh(
	new THREE.SphereGeometry(0.1, 16, 16),
	spheresMaterial,
	numSpheres
);

const matrix = new THREE.Matrix4();
const position = new THREE.Vector3();
const quaternion = new THREE.Quaternion();
const scale = new THREE.Vector3(1, 1, 1);

for (let i = 0; i < numSpheres; i++) {
	position.x = (Math.random() - 0.5) * 10;
	position.y = (Math.random() - 0.5) * 10;
	position.z = (Math.random() - 0.5) * 10;

	quaternion.setFromEuler(
		new THREE.Euler(
			Math.random() * Math.PI,
			Math.random() * Math.PI,
			Math.random() * Math.PI
		)
	);

	scale.setScalar(Math.random() * 0.1 + 0.02);

	matrix.compose(position, quaternion, scale);
	spheres.setMatrixAt(i, matrix);
}

scene.add(spheres);

function animate() {
	requestAnimationFrame(animate);

	spheres.rotation.x += 0.001;
	spheres.rotation.y += 0.001;

	renderer.render(scene, camera);
}
animate();