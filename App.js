import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { Provider } from 'react-redux';
import { Navigation } from 'react-native-navigation';
import configureStore from 'App/store/configStore.js';

import colors from 'App/config/colors';
import { startSplashScreen } from './app/navigator/splashScreenNavigator';
import screens from 'App/constants/screens';
import { registerScreens, registerScreenVisibilityListener } from './screenRegistry';

export const store = configureStore();

registerScreens(store, Provider);
registerScreenVisibilityListener()
export default class App extends Component {
  
  constructor(props) {
    super(props);

    startSplashScreen();
  }

}
