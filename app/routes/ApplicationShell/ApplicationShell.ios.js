import React, { Component } from 'react';
import {
	DrawerLayoutAndroid,
	View,
	Text,
	NavigationExperimental,
	TouchableHighlight
} from 'react-native';

// import Home from '../Home';
import Favourites from '../Favourites';
import Home from '../Home';

const {
  CardStack: NavigationCardStack,
  StateUtils: NavigationStateUtils,
} = NavigationExperimental;

export default class ApplicationShell extends Component {

	constructor(props) {
        super(props);
    }

	render(){
		return <Text>Hello World</Text>
	}
}