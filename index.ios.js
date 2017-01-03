/**
 * This is main registry Component for IOS app
 */

import React, { Component } from 'react';
import { AppRegistry, Text } from 'react-native';
import { Provider } from 'react-redux'
import configureStore from './app/store/configureStore'

// import App from './app';
import GoogleSigninComponentContainer from './app/routes/GoogleSigninComponent'

const store = configureStore();

const LeapfroggerReact = () => (
	<Provider store={store}>
      	<GoogleSigninComponentContainer/>
    </Provider>
)

AppRegistry.registerComponent('LeapfroggerReact', () => LeapfroggerReact);
