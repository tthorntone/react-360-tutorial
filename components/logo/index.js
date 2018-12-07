import * as React from 'react';
import {Animated, View, asset, AmbientLight, PointLight, DirectionalLight, SpotLight, Model} from 'react-360';
import style from "./style";

const AnimatedModel = Animated.createAnimatedComponent(Model);

class Logo extends React.Component {
  
  rotation = new Animated.Value(0);

  componentDidMount(nextProps) {
      this.rotation.setValue(0);
      Animated.timing(this.rotation, {toValue: 360, duration: 20000}).start();
  }

  render() {

    return (
    <View>
    
    <SpotLight intensity={1.0} style={{color:'white', transform: [{translate: [0, 0, -20]}]}}/>

    <View style={style.view}>
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
      </View>
      
    );
  }
}

export default Logo;