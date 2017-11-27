import React, { Component } from 'react';
import { 
  View, 
  Text,
  Image,  
  TextInput,
 } from 'react-native';
 
import style from './style';

// import 
 class SplashScreen extends Component {

  constructor() {
    super();

  }

  componentDidMount() {
    setTimeout( () => { 
      console.log('Timer invoked'); 
      this._navigateToScreenRouter();
    }, 1000 );
  }

  _navigateToScreenRouter = () => {
    // navigate to initial
  }

  render() {
    return (
      <View style={style.mainContainer}>
        <Text>Splash Screen</Text>
      </View>
    );
  }

 }

 export default SplashScreen;