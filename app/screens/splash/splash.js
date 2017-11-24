import React, { Component } from 'react';
import { 
  View, 
  Text,
  Image,  
  TextInput,
 } from 'react-native';
 
import { createTransition, Fade } from 'react-native-transition';

import InitialScreen from './../initial';
import style from './style';

// const Transition = createTransition(Fade);

 class SplashScreen extends Component {

  constructor() {
    super();

    this.state = { splashShowed: false };
  }

  componentDidMount() {
    this.timeout = setTimeout(() => {
      console.log('Timer invoked'); 
      this.setState({ splashShowed: true });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timeout);
  }

  render() {
    return (
        <View style={style.mainContainer}>
          { this.state.splashShowed ? <InitialScreen/> : null }
        </View>
    );
  }

 }

 export default SplashScreen;