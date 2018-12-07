#Let's Get Our Hands on some React-360!
What is React-360?

##Step 1: First Looks

1. npm install -g react-360-cli
2. react-360 init Office_Demo
3. cd Office_Demo
4. npm start

Open up "http://localhost:8081/index.html?hotreload" and take a look!

And to prove this is just react, do the following:
1. Open up ./index.js in your favorite IDE.
2. Add the following code:

    // Our component will keep track of this state
    state = {
      timesUp: "",
    };

    demoSurfaces = () => {
      this.setState({timesUp: "Time's Up!"});
    };

    // Once the component mounts, run the demo!
    componentDidMount() {
      setTimeout(this.demoSurfaces, 1000);
    }

    ... 

    {`Welcome to React 360: ${this.state.timesUp}`}

##Step 2: Exploration and Explanation of Layouts
###Surfaces (default)
1. Open up ./client.js in your favorite IDE.
2. Add Surface to your import line:
    import {ReactInstance, Surface} from 'react-360-web';
3. Add the following constant variable:
    const mySurface = new Surface(
      1000, /* width */
      600, /* height */
      Surface.SurfaceShape.Cylinder /* shape */
    );
4. Change the renderToSurface to look like this:
    r360.renderToSurface(
      r360.createRoot('SAME', { /* initial props */ }),
      mySurface
    );
5. Nothing should change when you save!
6. Now change the mySurface variable instead to be of Shape:
    Surface.SurfaceShape.Flat
7. and add the following line immediately after the variable:
    mySurface.setAngle(-0.6, 0);

###Locations/3D Objects
"Origins in 3D Space"
  
1. Open up ./client.js in your favorite IDE, and add the following block:
    // Render to this location
    r360.renderToLocation(
      r360.createRoot('surfaceView'),
      r360.getDefaultLocation()
    );
2. Open up ./index.js in your favorite IDE, and add this to your import list:
    import SurfaceView from "./components";
2a. And this to the very end:
    AppRegistry.registerComponent('surfaceView', () => SurfaceView);
3. Now create the ./components folder, and add an index.js file, with this:  
import React from 'react';
import {
  View,
  Model,
  asset,
  Animated,
  StyleSheet,
  SpotLight
} from 'react-360';

const AnimatedModel = Animated.createAnimatedComponent(Model);

export default class SurfaceView extends React.Component {

    rotation = new Animated.Value(0);

    componentDidMount(nextProps) {
        this.rotation.setValue(0);
        Animated.timing(this.rotation, {toValue: 360, duration: 20000}).start();
    }
  

  render() {
    return (

        <View style={styles.view}>
        <SpotLight intensity={1.0} style={{color:'white', transform: [{translate: [0, 0, -20]}]}}/>
        <AnimatedModel
        style={{transform: [{rotateY: this.rotation}, {rotateZ: 90}] }}
        source={{
            obj: asset('./entities/logo.obj'),
            mtl: asset('./entities/logo.mtl')
        }}
        lit={true}
        
        >
        </AnimatedModel>
        </View>
    );
}
};

const styles = StyleSheet.create({
   view: {
        transform: [
            {
                translate: [-20, 0, -5]
            }
        ],
       }
  });
  
    
