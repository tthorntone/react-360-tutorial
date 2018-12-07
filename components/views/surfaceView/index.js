import React from 'react';
import {
  View,
} from 'react-360';
import Logo from '../../logo';
import GazeButton from "react-360-gaze-button";

class SurfaceView extends React.Component {

  setGazed = () => {
    console.log("TEST!");
  };

    render() {
      return (
        <View style={{backgroundColor:"red"}}>
           <GazeButton
            duration={3000}
            onClick={this.setGazed}
            render={(remainingTime, isGazed) => (
              <Logo  />
            )}
            />
        </View>

      )
    }
  }

export default SurfaceView;