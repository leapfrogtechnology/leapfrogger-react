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
        this._renderNavigationView = this._renderNavigationView.bind(this);
        this._renderScene = this._renderScene.bind(this);
    }

	render(){
		return(
			<DrawerLayoutAndroid
			  ref={'APPLICATION_DRAWER'}
		      drawerWidth={300}
		      drawerPosition={DrawerLayoutAndroid.positions.Left}
		      renderNavigationView={() => this._renderNavigationView()}>

		      	<NavigationCardStack
	                direction='vertical'
	                navigationState={this.props.mainNavigation}
	                renderScene={this._renderScene}
	            />

		    </DrawerLayoutAndroid>
		);
	}
	
	_renderNavigationView() {
		return (
			<View style={{flex: 1, backgroundColor: '#fff'}}>
		      <TouchableHighlight  onPress={() => this._navigatePage({key: 'home'})}>
		      	<Text>Home</Text>
		      </TouchableHighlight>
		      <TouchableHighlight  onPress={() => this._navigatePage({key: 'favourites'})}>
		      	<Text>Favourite</Text>
		      </TouchableHighlight>
		    </View>
		);
	}

	_renderScene(props) {
		const { route } = props.scene;
		switch(route.key){
			case 'home':
				return <Home />
			
			case 'favourites':
				return <Favourites />
			
			default:
				return null;
		}
    }
    
	_navigatePage(route){
		this._closeDrawer();
		this.props.navigatePage(route);
	}

	_closeDrawer(){
		this.refs['APPLICATION_DRAWER'].closeDrawer();
	}

}