var faces;
var isDragging = false;
var mouseDown = false;
var timerId;
var viewPort;
var app = app || {};
var isDragging = false;
var previousMousePosition = {
  x: 0,
  y: 0
};
var hud_heading;
var hud_text;
var hud;

app.addScene = function() {
  app.scene = new THREE.Scene();
};

app.addHelpers = function() {
  app.axes = new THREE.AxisHelper(100);
  app.mainLightHelper = new THREE.CameraHelper( app.mainLight.shadow.camera );
  app.secondLightHelper = new THREE.CameraHelper(app.secondLight.shadow.camera);
  app.scene.add(app.axes, app.mainLightHelper, app.secondLightHelper);
};

app.addCamera = function() {
  app.camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 5000);
  app.camera.position.z = 300;
  app.camera.position.y = 40;
  app.camera.position.x = 0;
  app.scene.add( app.camera );
};

app.addRenderer = function() {
  app.renderer = new THREE.WebGLRenderer();
  app.renderer.setPixelRatio( window.devicePixelRatio || 1, window.devicePixelRatio || 1 );
  app.renderer.setSize( app.width, app.height );
  app.renderer.shadowMap.enabled = true;
  app.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  app.renderer.setClearColor( 0x000000, 1 );

};

app.addOrbitControls = function() {
  app.controls = new THREE.OrbitControls( app.camera, app.renderer.domElement );
  var cubeX = app.cube.position.x;
  var cubeY = app.cube.position.y;
  var cubeZ = app.cube.position.z;
  app.controls.target.set(cubeX, cubeY, cubeZ);
  var cubeVector = new THREE.Vector3(cubeX, cubeY, cubeZ);
  app.camera.lookAt(cubeVector);
};

app.addMainLight = function() {
  app.mainLight = new THREE.SpotLight(0xFFFFFF, 0.2);
  app.mainLight.position.set(0, 400, 0);
  app.mainLight.castShadow = true;
  app.mainLight.shadow.mapSize.width = 2048;
  app.mainLight.shadow.mapSize.height = 2048;
  app.mainLight.penumbra = 1;
  app.mainLight.angle = 5;
  app.mainLight.angle = Math.PI / 5;
  app.mainLight.shadow.camera.fov = 80;
  app.scene.add(app.mainLight);
};

app.addSecondLight = function() {
  app.secondLight = new THREE.SpotLight( 0xFFFFFF, 1);
  app.secondLight.position.set(100, 0, 150);
  app.secondLight.castShadow = true;
  app.secondLight.shadow.mapSize.width = 2048;
  app.secondLight.shadow.mapSize.height = 2048;
  app.scene.add(app.secondLight);
};

app.animate = function() {
  if ( app.groupMesh ) {
    app.groupMesh.rotation.y += 0.005;
    app.cubeBox.rotation.y += 0.005;

  }
  app.renderer.render( app.scene, app.camera );
  requestAnimationFrame( app.animate );
};

app.addGround = function() {
  var groundGeometry = new THREE.PlaneGeometry(1200,1200);
  var groundMaterial = new THREE.MeshPhongMaterial({
    color: 0xDCDCDC
  });
  app.ground = new THREE.Mesh(groundGeometry, groundMaterial);
  app.ground.rotation.x = -0.5 * Math.PI;
  app.ground.position.set(0,0,0);
  app.ground.receiveShadow = true;
  app.scene.add(app.ground);
};

app.addCube = function() {
  var cubeShape = new THREE.BoxGeometry( 100, 100, 100 );
  app.colorGeometry(cubeShape, 0xbc0000);
  var material = new THREE.MeshPhongMaterial({vertexColors: THREE.VertexColors});
  app.cube = new THREE.Mesh( cubeShape, material );
  var cubeBoxMaterial = new THREE.MeshNormalMaterial({transparent: true, opacity: 0, side: THREE.FrontSide});
  app.cubeBoxShape = new THREE.BoxGeometry( 120, 120, 120);
  app.material = new THREE.BoxGeometry( 100, 100, 100 );
  app.cubeBox = new THREE.Mesh( app.cubeBoxShape, cubeBoxMaterial);

  faces = app.cubeBox.geometry.faces;
  faces[0].name = "Twitter";
  faces[1].name = "Twitter";
  faces[2].name = "Skills";
  faces[3].name = "Skills";
  faces[4].name = "Phone";
  faces[5].name = "Phone";
  faces[6].name = "Mail";
  faces[7].name = "Mail";
  faces[8].name = "GitHub";
  faces[9].name = "GitHub";
  faces[10].name = "LinkedIn";
  faces[11].name = "LinkedIn";

  app.cubeBox.position.y = 100;
  app.cubeBox.rotation.x = 0.5;
  app.cubeBox.rotation.y = -0.8;
  app.cube.position.y = 100;
};

app.addIcons = function() {
  var loader = new THREE.FontLoader();
  loader.load( 'fonts/icons.json', function ( font ) {
    var gitHub = new THREE.TextGeometry( "", {
      font: font,
      size: 75,
      height: 5,
      curveSegments: 24,
    });
    var linkedIn = new THREE.TextGeometry( "", {
      font: font,
      size: 75,
      height: 5,
      curveSegments: 24,
    });

    var skills = new THREE.TextGeometry( "", {
      font: font,
      size: 65,
      height: 5,
      curveSegments: 24,
    });

    var mail = new THREE.TextGeometry( "", {
      font: font,
      size: 74,
      height: 5,
      curveSegments: 24,
    });

    var twitter = new THREE.TextGeometry( "", {
      font: font,
      size: 75,
      height: 5,
      curveSegments: 24,
    });

    var phone = new THREE.TextGeometry( "", {
      font: font,
      size: 75,
      height: 5,
      curveSegments: 24,
    });
    var textMaterial = new THREE.MeshPhongMaterial(
     { side: THREE.DoubleSide, vertexColors: THREE.VertexColors }
    );

    var geometries = [twitter, phone, mail, skills, gitHub, linkedIn];

    for (var i = 0; i < geometries.length; i++) {
      app.colorGeometry(geometries[i], 0xAFAFAF);
    }

    app.twitterMesh = new THREE.Mesh( twitter, textMaterial);
    app.twitterMesh.position.set(50, 62, 45);
    app.twitterMesh.rotateY(THREE.Math.degToRad(90));

    app.phoneMesh = new THREE.Mesh( phone, textMaterial);
    app.phoneMesh.position.set(-45, 150, 38);
    app.phoneMesh.rotateX(THREE.Math.degToRad(-90));

    app.mailMesh = new THREE.Mesh( mail, textMaterial );
    app.mailMesh.position.set(-44, 50, -37);
    app.mailMesh.rotateX(THREE.Math.degToRad(90));

    app.skillsMesh = new THREE.Mesh( skills, textMaterial );
    app.skillsMesh.position.set(-50, 62, -45);
    app.skillsMesh.rotateY(THREE.Math.degToRad(-90));

    app.gitHubMesh = new THREE.Mesh( gitHub, textMaterial);
    app.gitHubMesh.position.set( -45, 62, 50 );

    app.linkedInMesh = new THREE.Mesh( linkedIn, textMaterial );
    app.linkedInMesh.rotateY(THREE.Math.degToRad(180));
    app.linkedInMesh.position.set(45, 62, -50);

    app.meshArray = [app.gitHubMesh, app.linkedInMesh, app.twitterMesh, app.skillsMesh, app.mailMesh, app.phoneMesh];

    app.meshArray.unshift(app.cube);

    app.group = app.mergeMeshes(app.meshArray);
    app.groupMesh = new THREE.Mesh(app.group, textMaterial);
    app.groupMesh.geometry.translate(0,-100,0);
    app.groupMesh.position.y = 100;
    app.groupMesh.rotation.x = 0.5;
    app.groupMesh.rotation.y = -0.8;
    app.groupMesh.castShadow = true;
    app.groupMesh.receiveShadow = true;
    app.scene.add( app.groupMesh, app.cubeBox );
  });
};

app.mergeMeshes = function(meshes) {
  var combined = new THREE.Geometry();
  for ( var i = 0; i < meshes.length; i++ ) {
    meshes[i].updateMatrix();
    combined.merge(meshes[i].geometry, meshes[i].matrix);
  }
  return combined;
};

app.colorGeometry = function(geometry, color) {
  for (var i = 0; i < geometry.faces.length; i++) {
    face = geometry.faces[i];
    face.color.setHex(color);
  }
};

app.addListeners = function() {
  var mouse = {};
  var checkCollision = function () {
    mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
    mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;

    raycaster = new THREE.Raycaster();
    var vector = new THREE.Vector3( mouse.x, mouse.y, 1 ).unproject( app.camera );
    raycaster.set( app.camera.position, vector.sub( app.camera.position ).normalize() );

    var intersects = raycaster.intersectObjects( [app.cubeBox], true );

    if ( intersects[0] ) {
      var face = intersects[0].face.name;
      if (isDragging === false) {
        showHUD(face);
      }
    } else {
      intersects = null;
    }
  };
  viewPort.addEventListener( 'mouseup', checkCollision );
  viewPort.addEventListener( 'touchend', checkCollision );

  app.renderer.domElement.addEventListener("mousedown", function(e) {
    mouseDown = true;
  });

  app.renderer.domElement.addEventListener("touchdown", function(e) {
    mouseDown = true;
  });

  app.renderer.domElement.addEventListener("touchmove", function(e) {
    dragger(e);
  });
  app.renderer.domElement.addEventListener("mousemove", function(e) {
    dragger(e);
  });

  var dragger = function(e) {
    if (mouseDown) {
      isDragging = true;

      var delta = {
        x: e.offsetX - previousMousePosition.x,
        y: e.offsetY - previousMousePosition.y
      };

      var deltaRotationQuaternion = new THREE.Quaternion().setFromEuler(
        new THREE.Euler(
          delta.y * (Math.PI / 180),
          delta.x * (Math.PI / 180),
          0,
          'XYZ'
        )
      );
      app.groupMesh.quaternion.multiplyQuaternions(deltaRotationQuaternion, app.groupMesh.quaternion);
      app.cubeBox.quaternion.multiplyQuaternions(deltaRotationQuaternion, app.cubeBox.quaternion);

    }
    previousMousePosition = {
      x: e.offsetX,
      y: e.offsetY
    };
  };
  app.renderer.domElement.addEventListener("touchend", function(e) {
    isDragging = false;
    mouseDown = false;
  });
  app.renderer.domElement.addEventListener("mouseup", function(e) {
    isDragging = false;
    mouseDown = false;
  });

  window.addEventListener("resize", function () {
    app.width = window.innerWidth;
    app.height = window.innerHeight;

    app.camera.aspect = app.width / app.height;
    app.camera.updateProjectionMatrix();

    app.renderer.setSize( app.width, app.height );
    app.renderer.render( app.scene, app.camera );
  });
};



app.init = function() {
  viewPort = document.getElementById("viewport");
  app.width = window.innerWidth;
  app.height = window.innerHeight;

  app.addScene();
  app.addCamera();
  app.addRenderer();
  app.addMainLight();
  app.addSecondLight();
  // app.addHelpers(); //DEV ONLY
  app.addGround();
  app.addCube();
  app.addIcons();
  // app.addOrbitControls();
  var cubeVector = new THREE.Vector3(app.cube.position.x, app.cube.position.y, app.cube.position.z);
  app.camera.lookAt(cubeVector);
  viewPort.appendChild( app.renderer.domElement );
  app.animate();
  app.addListeners();
};


// HEADS UP display

$(document).ready(function() {
  app.init();
  hud = $(".hud");
  hud_heading = $(".hud_heading");
  hud_text = $(".hud_text");
  hud.on("click", function() {
    window.setTimeout(function() {
      $(".hud").fadeOut();
    }, 100);
    // $(".hud").fadeOut();
  });

});

var showText = function(name) {
  hud_text.html("");
  if (name === "Twitter") {
    hud_text.typeIt({
      speed: 20,
      lifeLife: false,
      autoStart: false,
      strings: ['<a href="http://www.twitter.com/cj_barnaby" target="_blank">@cj_barnaby</a>']
    });
  } else if (name === "Skills") {
    var $icon_wrapper = $("<div></div>");
    $icon_wrapper.addClass("icon_wrapper");
    var devIcons = [

      $('<span class="devicons devicons-github_badge">'),
      $('<span class="devicons devicons-git">'),
      $('<span class="devicons devicons-html5">'),
      $('<span class="devicons devicons-css3">'),
      $('<span class="devicons devicons-javascript_badge">'),
      $('<span class="devicons devicons-ruby">'),
      $('<span class="devicons devicons-ruby_on_rails">'),
      $('<span class="devicons devicons-sass">'),
      $('<span class="devicons devicons-bootstrap">'),
      $('<span class="devicons devicons-react">'),
      $('<span class="devicons devicons-nodejs_small">'),
      $('<span class="devicons devicons-photoshop">'),
      $('<span class="devicons devicons-illustrator">'),
      $('<span class="devicons devicons-backbone">'),
    ];
    hud_text.append($icon_wrapper);
    for (var i = 0; i < devIcons.length; i++) {
      $icon_wrapper.append(devIcons[i]);
    }
  } else if (name === "Phone") {
    hud_text.typeIt({
      speed: 20,
      lifeLife: false,
      autoStart: false,
      strings: ['<a href="tel:+61438470527">0438 470 527 </a>']
    });
  } else if (name === "Mail") {
    hud_text.typeIt({
      speed: 20,
      lifeLife: false,
      autoStart: false,
      strings: ['<a href="mailto:cjbarnaby@gmail.com">cjbarnaby@gmail.com</a>']
    });
  } else if (name === "GitHub") {
    hud_text.typeIt({
      speed: 20,
      lifeLife: false,
      autoStart: false,
      strings: ['<a href="http://www.github.com/cjbarnaby" target="_blank">cjbarnaby</a>']
    });
  } else if (name === "LinkedIn") {
    hud_text.typeIt({
      speed: 20,
      lifeLife: false,
      autoStart: false,
      strings: ['<a href="https://au.linkedin.com/in/cjbarnaby" target="_blank">cjbarnaby</a>']
    });
  }
};

var showHUD = function(name) {
  $(".hud").show();
  hud_heading.typeIt({
    speed: 20,
    lifeLife: false,
    autoStart: false,
    strings: [name],
    cursor: false
  });
  showText(name);
};
