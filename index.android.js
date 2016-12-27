/**
 *  This is main registry Component for Android app
 */

import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import Home from './app/layouts/Home/Home';

export default class LeapfroggerReact extends Component {
  render() {
    return (
      <Home />
    );
  }
}

AppRegistry.registerComponent('LeapfroggerReact', () => LeapfroggerReact);
