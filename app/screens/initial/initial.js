import React, { Component } from 'react';
import { View } from 'react-native';

import { startTabScreen } from './../../navigator/tabNavigator';
import { startLoginScreen } from './../../navigator/singleScreenNavigator';

import LoginScreen from './../login';
import screens from './../../constants/screens';

class Initial extends Component  {

  componentWillMount() {}

  componentDidMount() {
    this.props.isLoggedIn ? startTabScreen() : startLoginScreen()    
  }

  render() {
    return null;
  }

}

export default Initial;
