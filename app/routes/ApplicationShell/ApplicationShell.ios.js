import React, { Component } from 'react';
import {
	View,
	Text,
	NavigationExperimental,
	TouchableHighlight
} from 'react-native';
// import Home from '../Home';
import Favourites from '../Favourites';
import Home from '../Home';
import {GoogleSignin, GoogleSigninButton} from 'react-native-google-signin';
import {GoogleSigninComponent} from '../Login'

const {
  CardStack: NavigationCardStack,
  StateUtils: NavigationStateUtils,
} = NavigationExperimental;

class ApplicationShell extends Component {

	constructor(props) {
        super(props);
    }

	render(){
		return <GoogleSigninComponent/>
	}
}
