/**
 *  This is main registry Component for Android app
 */
import React from 'react'
import { AppRegistry } from 'react-native';
import App from './app';

const LeapfroggerReact = () => (
<App />
)

AppRegistry.registerComponent('LeapfroggerReact', () => LeapfroggerReact);
