 //       <script src = "node_modules/three/build/three.min.js"></script>
//        <script src = "node_modules/three-orbit-controls/index.js"></script>        

var THREE = require('three')
var OrbitControls = require('three-orbit-controls')(THREE)

    // var THREE = require('three')
    let scene, camera, renderer;
    function init() {
        scene = new THREE.Scene;

        camera = new THREE.PerspectiveCamera(55, window.innerWidth/window.innerHeight, 45, 30000);
        camera.position.set(-900, -200, -900);

        renderer = new THREE.WebGLRenderer({antialias:true});
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(renderer.domElement);

        let controls = new THREE.OrbitControls(camera);
        controls.addEventListener('change', renderer);

        let materialArray = [];
        let texture_bk = new THREE.TextureLoader().load('public/images/bluecloud_bk.jpg');
        let texture_dn = new THREE.TextureLoader().load('public/images/bluecloud_dn.jpg');
        let texture_ft = new THREE.TextureLoader().load('public/images/bluecloud_ft.jpg');
        let texture_lf = new THREE.TextureLoader().load('public/images/bluecloud_lf.jpg');
        let texture_rt = new THREE.TextureLoader().load('public/images/bluecloud_rt.jpg');
        let texture_up = new THREE.TextureLoader().load('public/images/bluecloud_up.jpg');

        materialArray.push(new THREE.MeshBasicMaterial({map: texture_bk}));
        materialArray.push(new THREE.MeshBasicMaterial({map: texture_dn}));
        materialArray.push(new THREE.MeshBasicMaterial({map: texture_ft}));
        materialArray.push(new THREE.MeshBasicMaterial({map: texture_lf}));
        materialArray.push(new THREE.MeshBasicMaterial({map: texture_rt}));
        materialArray.push(new THREE.MeshBasicMaterial({map: texture_up}));

        let skyboxGEO = new THREE.BoxGeometry(10000, 10000, 10000);
        let skybox = new THREE.Mesh(skyboxGeo, materialArray);
        scene.add(skybox);

        animate();
    }
    function animate() {
        renderer.render(scene,camera);
        requestAnimationFrame(animate);
    }
    init();


       
