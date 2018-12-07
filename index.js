import {
  AppRegistry,
} from 'react-360';

import { SurfaceView,LocationView } from "./components";



AppRegistry.registerComponent('locationView', () => LocationView);
AppRegistry.registerComponent('surfaceView', () => SurfaceView);
