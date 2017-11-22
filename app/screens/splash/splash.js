import React, { Component } from 'react';
import { 
  View, 
  Text,
  Image,  
  TextInput,
 } from 'react-native';
import TimerMixin from 'react-timer-mixin';
 
import style from './style';

// import 
 class SplashScreen extends Component {

  mixins = [TimerMixin];

  constructor() {
    super();

  }

  componentDidMount() {
    this.setTimeout( () => { 
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