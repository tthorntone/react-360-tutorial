// This file contains the boilerplate to execute your React app.
// If you want to modify your application's content, start in "index.js"

import {ReactInstance, Surface, Location} from 'react-360-web';

function init(bundle, parent, options = {}) {
  const r360 = new ReactInstance(bundle, parent, {
    // Add custom options here
    fullScreen: true,
    ...options,
  });

  const fullScreenSurface = new Surface(
    1000, /* width */
    600, /* height */
    Surface.SurfaceShape.Cylinder /* shape */
  );
  

  // Render your app content to the default cylinder surface
  r360.renderToSurface(
    r360.createRoot('locationView', { /* initial props */ }),
    fullScreenSurface
  );

  // Create a location two meters in front of the user, and one meter down
  //const location = new Location([0, 0, -2]);
  
  // Render to this location
  r360.renderToLocation(
    r360.createRoot('surfaceView'),
    r360.getDefaultLocation()
  );

  // Load the initial environment
  r360.compositor.setBackground(r360.getAssetURL('images/front_office.jpg'));
}

window.React360 = {init};
