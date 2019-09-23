
//Current Theme
let theme = 0;
let dirLight, dirLight2;

const renderer = new THREE.WebGLRenderer({
  canvas: document.getElementById("battleArea"),
  antialias: true
});

renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor('rgb(2,15,20)',.45);
renderer.setPixelRatio( window.devicePixelRatio );

//Camera
const camera = new THREE.PerspectiveCamera(
  14,
  window.innerWidth / window.innerHeight,
  1,
  2500
);

const scene = new THREE.Scene();

dirLight = new THREE.DirectionalLight( 'rgb(4,2,166)', .95 );
dirLight2 = new THREE.DirectionalLight( 'rgb(24,30,66)', .95 );

dirLight.color.r = 255;
dirLight.color.b = 21;
dirLight.color.g = 82;
dirLight.color.a = .5;
dirLight.intensity = .0115;
dirLight.needsUpdate = true;

dirLight2.color.r = 27;
dirLight2.color.b = 147;
dirLight2.color.g = 55;
dirLight2.color.a = .15;
dirLight2.intensity = .015;
dirLight2.needsUpdate = true;

dirLight.position.set(100, 121, 21);
dirLight2.position.set(-100, -111, 21);

scene.add(dirLight, dirLight2);

//Rings!
const geometryInner1 = new THREE.TorusGeometry( 21, 12, 22, 75, 28 );
const geometryOuter1 = new THREE.TorusGeometry( 33, 12, 17, 15, 28 );

//Rings!
const geometryInner2 = new THREE.TorusGeometry( 15, 18, 22, 35, 18 );
const geometryOuter2 = new THREE.TorusGeometry( 23, 18, 17, 17, 18 );


const material = new THREE.MeshPhysicalMaterial({
  reflectivity: 5,
})

const material2 = new THREE.MeshPhysicalMaterial({
  clearcoat: 1,
  clearcoatRoughness: 1,
  reflectivity: 7,
})

//Set 1
let ring = new THREE.Mesh(geometryInner1, material2);
let ring2 = new THREE.Mesh(geometryOuter1, material2);
let ring3 = new THREE.Mesh(geometryOuter1, material2);

//Set 2
let ring4 = new THREE.Mesh(geometryInner2, material2);
let ring5 = new THREE.Mesh(geometryOuter2, material2);
let ring6 = new THREE.Mesh(geometryOuter2, material2);


ring.position.set(0, 0, -400);
ring2.position.set(0, 0, -400);
ring3.position.set(0, 0, -400);
ring4.position.set(0, 0, -410);
ring5.position.set(0, 0, -420);
ring6.position.set(0, 0, -420);


scene.add(
  ring, ring2, ring3, ring4, ring5, ring6,
);

renderer.render(scene, camera);

//RENDER LOOP
requestAnimationFrame(render);

function render() {

  ring.rotation.z += .005;
  ring2.rotation.z += .006;
  ring3.rotation.z += .005;
  ring4.rotation.z -= .015;
  ring5.rotation.z += .020;
  ring6.rotation.z += .025;

  renderer.render(scene, camera);
  requestAnimationFrame(render);
}
