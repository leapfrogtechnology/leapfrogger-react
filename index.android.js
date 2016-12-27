/**
 *  This is main registry Component for Android app
 */

import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import NavigationRootContainer from './app/routes/NavRoot';
import { Provider } from 'react-redux'

import configureStore from './app/store/configureStore'
const store = configureStore();

export default class LeapfroggerReact extends Component {
  render() {
    return (
		<Provider store={store}>
			<NavigationRootContainer />
		</Provider>
    );
  }
}

AppRegistry.registerComponent('LeapfroggerReact', () => LeapfroggerReact);
