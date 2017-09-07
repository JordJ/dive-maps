(function () {
    "use strict";

    var viewer = new Cesium.Viewer('cesiumContainer', {
        scene3DOnly: true,
        selectionIndicator: false,
        baseLayerPicker: false,
	    animation: false,
	    timeline: false
    });
	
	// Create an initial camera view
    var initialPosition = new Cesium.Cartesian3.fromDegrees(151.640017,-33.085629, 500);
    var initialOrientation = new Cesium.HeadingPitchRoll.fromDegrees(30, -90, 0);
    var homeCameraView = {
        destination : initialPosition,
        orientation : {
            heading : initialOrientation.heading,
            pitch : initialOrientation.pitch,
            roll : initialOrientation.roll
        }
    };
	
    // Add entry / exit billboards
    var entrySites = viewer.entities.add({
	    name : 'Boat Shed Ramp',
		description : 'This is the most popular entry point. Take care on the ramp as it can be slippery. Best to step off the sides.',
		position : Cesium.Cartesian3.fromDegrees(151.639127,-33.086187),
		point : {
		    pixelSize : 5,
			color : Cesium.Color.BLUE,
			outlineColor : Cesium.Color.WHITE,
			outlineWidth : 2
		}
	});
	
    var entrySites = viewer.entities.add({
	    name : 'The Steps',
		description : 'A great entry and exit that is close to the bridge if you don\'t like fighting the current.',
		position : Cesium.Cartesian3.fromDegrees(151.640022, -33.086518),
		point : {
		    pixelSize : 5,
			color : Cesium.Color.BLUE,
			outlineColor : Cesium.Color.WHITE,
			outlineWidth : 2
		}
	});
	
	// Relevant Local Businesses
    var entrySites = viewer.entities.add({
	    name : 'Snorkel and Dive Safari',
		description : 'Convenient for a post dive fill and to wash equipment. <a href="http://www.snorkelsafari.com.au/page/122/swansea" target="_blank">Website</a>',
		position : Cesium.Cartesian3.fromDegrees(151.638755, -33.086389),
		point : {
		    pixelSize : 5,
			color : Cesium.Color.RED,
			outlineColor : Cesium.Color.WHITE,
			outlineWidth : 2
		}
	});
	
	// Pylons
	var pylon1 = viewer.entities.add({
		name : 'Pylon',
		position : Cesium.Cartesian3.fromDegrees(151.639704, -33.086314),
		ellipse : {
			semiMinorAxis : 2,
			semiMajorAxis : 2,
			material : Cesium.Color.ORANGE.withAlpha(0.5)
		}
	});
	
	// Contours
	var contour1 = viewer.entities.add({
		name : 'Contour',
		corridor : {
			positions : Cesium.Cartesian3.fromDegreesArray([
															151.640226, -33.085068,
															151.639839, -33.084772,
															151.639540, -33.084521,
															151.639347, -33.084710,
															151.639427, -33.085062,
															151.639322, -33.085290,
															151.639317, -33.085497,
															151.639595, -33.085794,
														]),
														width : 0.5,
			material : Cesium.Color.RED.withAlpha(0.5)
		}
	});
	
    // Set the initial view
    viewer.scene.camera.setView(homeCameraView);
	
	

}());

