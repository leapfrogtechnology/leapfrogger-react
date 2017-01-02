/**
 * This is main registry Component for IOS app
 */

import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import App from './app';

const LeapfroggerReact = () => (
	<App />
)

AppRegistry.registerComponent('LeapfroggerReact', () => LeapfroggerReact);
