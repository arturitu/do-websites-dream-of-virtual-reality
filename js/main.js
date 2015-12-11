<!--
//
// If you are seeing this, you are a curious person. Thanks for your time and I hope you meet / work together sometime
// Sincerely, @arturitu ^----^
//
// This code would 'possibly' approved by @mrdoob http://zz85.github.io/mrdoobapproves/
-->
'use strict'

var clock, container, footer, camera, scene, renderer, controls, effect, manager, listener, loader, loaderStroke, meshLine;
var resolution = new THREE.Vector2( window.innerWidth, window.innerHeight );
var sound1, sound2, sound3;
var	toogle = 0;
var sky, unicorn, houseMistery, houseLight, pyramidEqual, pyramidLight;
var cameraRails = new THREE.Object3D();
var cameraOnRails = true;
var lightsArr = [];
var isPaused = false;

window.mobilecheck = function() {

	var check = false;
	( function( a ) {

		if ( /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test( a ) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test( a.substr( 0, 4 ) ) )check = true

	} )( navigator.userAgent || navigator.vendor || window.opera );
	return check;

}

function init() {

	container = document.getElementById( 'container' );
	footer = document.getElementsByTagName( 'footer' )[ 0 ];

	container.classList.add( 'handOpen' );

	clock = new THREE.Clock();

	camera = new THREE.PerspectiveCamera( 80, window.innerWidth / window.innerHeight, 1, 1000000 );

	listener = new THREE.AudioListener();
	camera.add( listener );

	scene = new THREE.Scene();

	cameraRails.add ( camera );
	scene.add( cameraRails );

	renderer = new THREE.WebGLRenderer( { antialias: true } );
	renderer.setPixelRatio( window.devicePixelRatio );
	renderer.setSize( window.innerWidth, window.innerHeight );
	renderer.sortObjects = false;

	effect = new THREE.VREffect( renderer );
	effect.setSize( window.innerWidth, window.innerHeight );

	container.innerHTML = '';
	container.appendChild( renderer.domElement );

	// CONTROLS
	controls = new THREE.VRControls( camera );

	manager = new WebVRManager( renderer, effect, { hideButton: false } );

	var skyGeo = new THREE.SphereGeometry( 4500, 32, 15 );

	//Sky
	loader = new THREE.TextureLoader();

	loader.load( 'assets/stars.jpg', function( texture ) {

		texture.minFilter = THREE.LinearFilter;
		texture.magFilter = THREE.LinearFilter;

		sky = new THREE.Mesh( skyGeo, new THREE.MeshBasicMaterial( { map : texture, side: THREE.BackSide } ) );
		sky.rotation.y = Math.PI / 2;
		scene.add( sky );

	} );

	//Line
	loaderStroke = new THREE.TextureLoader();
	loader.load( 'assets/stroke02.png', function( texture ) {

		texture.minFilter = THREE.LinearFilter;
		texture.magFilter = THREE.LinearFilter;

		var geo = new Float32Array( 100 * 3 );
		for ( var j = 0; j < geo.length; j += 3 ) {

			geo[ j ] = geo[ j + 1 ] = geo[ j + 2 ] = 0;

		}

		var g = new THREE.MeshLine();
		g.setGeometry ( geo, function( p ) {

			return p;

		} );

		var material = new THREE.MeshLineMaterial( {
			useMap: true,
			map: texture,
			color: new THREE.Color( 0x31160f ),
			opacity: 1,
			resolution: resolution,
			sizeAttenuation: true,
			lineWidth: 0.1,
			near: camera.near,
			far: camera.far,
			depthTest: true,
			depthWrite: false,
			transparent: true

		} );

		meshLine = new THREE.Mesh( g.geometry, material );
		meshLine.frustumCulled = false;
		meshLine.geo = geo;
		meshLine.g = g;
		scene.add( meshLine );

	} );

	var objectLoader = new THREE.ObjectLoader();
	objectLoader.load( 'assets/sceneAwwwards9_7.json', function( obj ) {

		var arrMesh = [];
		for ( var i = 0; i < obj.children.length; i ++ ) {

			arrMesh.push ( obj.children[ i ] );

		}

		for ( var i = 0; i < arrMesh.length; i ++ ) {

			switch ( arrMesh[ i ].type ){

				case 'PointLight':
					if ( arrMesh[ i ].name.substr( 0, 5 ) === 'light' ) {

						arrMesh[ i ].intensity = 1;
						arrMesh[ i ].distance = 35;
						lightsArr.push( arrMesh[ i ] );
						scene.add ( arrMesh[ i ] );

					} else {

						switch ( arrMesh[ i ].name ){

							case 'houseLight':
								houseLight = arrMesh[ i ];
							break;
							case 'pyramidLight':
								pyramidLight = arrMesh[ i ];
							break;
						}

						arrMesh[ i ].intensity = 0.4;
						arrMesh[ i ].distance = 3;
						scene.add ( arrMesh[ i ] );

					}

				break;
				case 'Mesh':
					switch ( arrMesh[ i ].name ){
						case 'Unicornio':
							unicorn = arrMesh[ i ];
							arrMesh[ i ].material.side = THREE.DoubleSide;
						break;
						case 'houseMistery':
							houseMistery = arrMesh[ i ];
							arrMesh[ i ].material.side = THREE.DoubleSide;
						break;
						case 'pyramidEqual':
							pyramidEqual = arrMesh[ i ];
						break;
					}
					scene.add ( arrMesh[ i ] );
				break;
				default:
					if ( arrMesh[ i ].name === 'spotLight' ) {

						arrMesh[ i ].intensity = 0.1;
						arrMesh[ i ].distance = 200;

					}

					scene.add( arrMesh[ i ] );
			}

		}
		//Load sounds
		sound1 = new THREE.Audio( listener );
		sound1.load( 'audio/base.mp3' );
		sound1.setRefDistance( 2.5 );
		sound1.source.loop = true;
		sound1.autoplay = true;
		unicorn.add( sound1 );

		sound2 = new THREE.Audio( listener );
		sound2.load( 'audio/mistery.mp3' );
		sound2.setRefDistance( 2 );
		sound2.source.loop = true;
		sound2.autoplay = true;
		houseMistery.add( sound2 );

		sound3 = new THREE.Audio( listener );
		sound3.load( 'audio/equal.mp3' );
		sound3.setRefDistance( 1 );
		sound3.source.loop = true;
		sound3.autoplay = true;
		pyramidEqual.add( sound3 );

	} );

	onWindowResize();
	window.addEventListener( 'resize', onWindowResize, false );

	animate();

}

function onWindowResize() {

	if ( window.innerWidth < window.innerHeight ) {

		footer.classList.add( 'hidden' );

	} else {

		if ( window.mobilecheck() ) {

			footer.classList.add( 'hidden' );

		} else {

			footer.classList.remove( 'hidden' );

		}

	}

	resolution.set( window.innerWidth, window.innerHeight );

}

function animate( timestamp ) {

	if ( isPaused ) {

		return;

	}
	toogle += 0.001;

	if ( meshLine ) {

		var geo = meshLine.geo;
		var g = meshLine.g;
		//console.log ( xTmp );

		for ( var j = 0; j < geo.length; j += 3 ) {

			geo[ j ] = geo[ j + 3 ] * 1.001;
			geo[ j + 1 ] = geo[ j + 4 ] * 1.001;
			geo[ j + 2 ] = geo[ j + 5 ] * 1.001;

		}

		var sinuousTmp = THREE.Math.mapLinear ( Math.sin ( toogle * 30 ), - 1, 1, - 0.2, 0.2 );

		geo[ geo.length - 3 ] = 1.3 * Math.sin ( toogle * 10 );
		geo[ geo.length - 2 ] = Math.sin ( camera.rotation.x + sinuousTmp ) * 2;
		geo[ geo.length - 1 ] = 1.3 * Math.cos ( toogle * 10 );

		g.setGeometry( geo );

	}

	cameraRails.position.x = 3 * Math.sin ( toogle );
	cameraRails.position.z = 3 * Math.cos ( toogle );

	if ( houseLight ) {

		houseLight.intensity = Math.abs ( Math.cos ( toogle * 5 ) * 2 ) + 0.3;

	}

	if ( pyramidEqual ) {

		var scaleTmp = THREE.Math.mapLinear ( Math.cos ( toogle * 500 ), - 1, 1, 1, 1.2 );
		pyramidEqual.scale.set ( scaleTmp, scaleTmp, scaleTmp );

	}

	// Update VR headset position and apply to camera.
	controls.update();

	// Render the scene through the manager.
	manager.render( scene, camera, timestamp );

	requestAnimationFrame( animate );

}

init();

function pauseAll( bool ) {

	isPaused = bool;
	if ( bool ) {

		sound1.pause();
		sound2.pause();
		sound3.pause();

	} else {

		animate();
		sound1.play();
		sound2.play();
		sound3.play();

	}

}

window.onfocus = function() {

	pauseAll ( false );

};
window.onblur = function() {

	pauseAll ( true );

};
