import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { Provider } from 'react-redux';
import { Navigation } from 'react-native-navigation';
import configureStore from './app/store/configStore.js';

import colors from './app/config/colors';
import { registerScreens, registerScreenVisibilityListener } from './screenRegistry';
import screens from './app/constants/screens';

const store = configureStore();

registerScreens(store, Provider);
registerScreenVisibilityListener()
export default class App extends Component {
  
  startApp = () => {
    const options = {
      screen: {
        screen: screens.SPLASH_SCREEN.id,
        navigatorStyle: {
          navBarHidden: true,
          navBarNoBorder: true
        }
      },
      appStyle: {
        orientation: 'portrait'
      }
    };

    Navigation.startSingleScreenApp(options);
  }
  
  constructor(props) {
    super(props);

    this.startApp();
  }

}
