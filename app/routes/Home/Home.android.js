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

import styles from './styles.js';

const {
  CardStack: NavigationCardStack,
  Header: NavigationHeader
} = NavigationExperimental;

export default class Home extends Component {
  constructor(props) {
    super(props);
    this._handleBackAction = this._handleBackAction.bind(this);
    this._handleNavigate = this._handleNavigate.bind(this);
  }

  componentDidMount() {
    RestClient.get(API.listEmployees, ENV.apiKey).then((data) => {
        data.forEach((employee) => {
          let isFavourite = false;
          if(this.props.favourites.includes(parseInt(employee.empId))){
            isFavourite = true
          }
          employee['isFavourite'] = isFavourite;
        })
        this.props.loadedEmployees({employees: data, isLoading: false});
      },
      (error) => {
        this.setState({isLoading: false});
        ToastAndroid.showWithGravity('Error occur while fetching data', ToastAndroid.SHORT, ToastAndroid.CENTER);
      })

    BackAndroid.addEventListener('hardwareBackPress', this._handleBackAction)
  }

  componentWillUnmount() {
    BackAndroid.removeEventListener('hardwareBackPress', this._handleBackAction)
  }

  render() {
    return (
      <NavigationCardStack
        direction='horizontal'
        navigationState={this.props.homeNavigation}
        onNavigate={this._handleNavigate.bind(this)}
        renderScene={this._renderScene.bind(this)}
        renderHeader={props => (
          <NavigationHeader
            style={styles.navBar}
            {...props}
            onNavigateBack={this._handleBackAction}
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
        <EmployeeList _handleNavigate={this._handleNavigate} employees={this.props.employees}/>
      );
    }

    if (route.key === 'employeeDetails') {
      return (
        <EmployeeDetails _goBack={this._handleBackAction} employee={route.employee}/>
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
