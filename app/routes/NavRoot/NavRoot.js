import React, {Component} from 'react';
import Home from '../Home';
import EmployeeDetails from '../EmployeeDetails';

import RestClient from '../../utils/RestClient';
import { ENV } from '../../../environment';
import { API } from '../../config/apis';

import {
    BackAndroid,
    NavigationExperimental, Text
} from 'react-native';

import styles from './styles.js'

const {
    CardStack: NavigationCardStack,
    Header: NavigationHeader
} = NavigationExperimental

export default class NavRoot extends Component {
    constructor(props) {
        super(props);
        this._renderScene = this._renderScene.bind(this);
        this._handleBackAction = this._handleBackAction.bind(this);
    }

    componentDidMount() {
        BackAndroid.addEventListener('hardwareBackPress', this._handleBackAction)
    }

	componentDidMount () {
		RestClient.get(API.listEmployees, ENV.apiKey).then((data) => {
    		this.props.loadedEmployees({employees: data, isLoading: false});
    	})

		BackAndroid.addEventListener('hardwareBackPress', this._handleBackAction)
	}
	componentWillUnmount () {
		BackAndroid.removeEventListener('hardwareBackPress', this._handleBackAction)
	}

	_renderScene(props) {
		const { route } = props.scene;
		if(route.key === 'home'){
			return (
				<Home _handleNavigate={this._handleNavigate.bind(this)} employees={this.props.employees}/>
			);
		}

        if (route.key === 'employeeDetails') {
            return (
                <EmployeeDetails _goBack={this._handleBackAction.bind(this)} employee={route.employee}/>
            );
        }
    }

    _handleBackAction() {
        if (this.props.navigation.index === 0) {
            return false
        }
        this.props.popRoute()
        return true
    }

    _handleNavigate(action) {
        switch (action && action.type) {
            case 'push':
                this.props.pushRoute(action.route)
                return true;

            case 'back':
            case 'pop':
                return this._handleBackAction()
            default:
                return false
        }
    }

    render() {
        return (
            <NavigationCardStack
                direction='vertical'
                navigationState={this.props.navigation}
                onNavigate={this._handleNavigate.bind(this)}
                renderScene={this._renderScene}
                renderHeader={props => (
                    <NavigationHeader
                        style={styles.navBar}
                        {...props}
                        onNavigateBack={this._handleBackAction}
                        renderTitleComponent={props => {
                            const title = props.scene.route.title
                            return (
                                <NavigationHeader.Title>
                                    <Text style={styles.navBarTitle}>{title}</Text></NavigationHeader.Title>
                            )
                        }}
                    />
                )}
            />
        )
    }


}