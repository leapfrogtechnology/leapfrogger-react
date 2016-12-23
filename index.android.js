/**
 *  This is main registry Component for Android app
 */

import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import Root from './app';

export default class LeapfroggerReact extends Component {
  render() {
    return (
      <Root />
    );
  }
}

AppRegistry.registerComponent('LeapfroggerReact', () => LeapfroggerReact);
