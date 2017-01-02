import React, {Component} from 'react';
import {
  BackAndroid,
  NavigationExperimental,
  Text,
  ToastAndroid
} from 'react-native';

import EmployeeList from '../EmployeeList';
import EmployeeDetails from '../EmployeeDetails';
import {ENV} from '../../../environment';
import {API} from '../../config/apis';
import RestClient from '../../utils/RestClient';
import styles from './styles.js'

const {
  CardStack: NavigationCardStack,
  Header: NavigationHeader
} = NavigationExperimental;

export default class Home extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    RestClient.get(API.listEmployees, ENV.apiKey).then((data) => {
        this.props.loadedEmployees({employees: data, isLoading: false});
      },
      (error) => {
        ToastAndroid.showWithGravity(error, ToastAndroid.SHORT, ToastAndroid.CENTER);
      })

    BackAndroid.addEventListener('hardwareBackPress', this._handleBackAction)
  }

  componentWillUnmount() {
    BackAndroid.removeEventListener('hardwareBackPress', this._handleBackAction)
  }

  render() {
    return (
      <NavigationCardStack
        direction='vertical'
        navigationState={this.props.homeNavigation}
        onNavigate={this._handleNavigate.bind(this)}
        renderScene={this._renderScene.bind(this)}
        renderHeader={props => (
          <NavigationHeader
            style={styles.navBar}
            {...props}
            onNavigateBack={this._handleBackAction.bind(this)}
            renderTitleComponent={props => {
              const title = props.scene.route.title
              return (
                <NavigationHeader.Title>
                  <Text style={styles.navBarTitle}>{title}</Text>
                </NavigationHeader.Title>
              )
            }}
          />
        )}
      />
    )
  }

  _renderScene(props) {
    const {route} = props.scene;
    if (route.key === 'employeeList') {
      return (
        <EmployeeList _handleNavigate={this._handleNavigate.bind(this)} employees={this.props.employees}/>
      );
    }

    if (route.key === 'employeeDetails') {
      return (
        <EmployeeDetails _goBack={this._handleBackAction.bind(this)} employee={route.employee}/>
      );
    }
  }

  _handleBackAction() {
    if (this.props.homeNavigation.index === 0) {
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
}
