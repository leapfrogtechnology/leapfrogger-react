import React, {Component} from 'react';
import {
  ListView,
  Text,
  View,
  TouchableHighlight,
  Image,
  TextInput,
  ActivityIndicator } from 'react-native';


import RestClient from '../../utils/RestClient';
import {ENV} from '../../../environment';
import {API} from '../../config/apis';

import styles from './styles.js';

export default class EmployeeList extends Component {

	constructor(props){
		super(props);
		const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    	this.state = {
      		dataSource: ds.cloneWithRows(this.props.employees.employees)
    	};
	}

	componentWillReceiveProps(nextProps){
		if(nextProps.employees !== this.props.employees){
			this.setState({dataSource: this.state.dataSource.cloneWithRows(nextProps.employees.employees)});
		}
	}

  render() {
    return (
      <View style={{flex:1}}>
        <TextInput placeholder='Search Employee' 
          style={styles.searchBar}
          value={this.state.searchText}
          onChange={this._searchEmployee.bind(this)}
        />
        <ActivityIndicator
              animating={this.props.employees.isLoading}
              style={[styles.centering, {height: 10}]}
              size="large"
           />
            <ListView style={styles.container}
              dataSource={this.state.dataSource}
              renderRow={(employee) => this._renderRow(employee)}
              enableEmptySections={true}
            />
      </View>
    );
  }

  _renderRow(employee) {
    return (
      <TouchableHighlight
        style={styles.employeeRowContainer}
        underlayColor='grey'
        onPress={() => this.props._handleNavigate(this._makePayload(employee))}>
        <View style={styles.employeeRow}>
          <View style={styles.imageContainer}>
            <Image style={styles.image} source={{uri: employee.avatarUrl}}/>
          </View>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{employee.firstName} {employee.lastName}</Text>
          </View>
          <View style={styles.favIconContainer}>
            <Image style={styles.favIcon} source={require('../../images/ic_star_rate_black_18dp.png')}/>
          </View>
        </View>
      </TouchableHighlight>
    );
  }

  _makePayload(employee) {
    return {
      type: 'push',
      route: {
        key: 'employeeDetails',
        title: `${employee.firstName} ${employee.lastName}`,
        employee: employee
      }
    }
  }

  _searchEmployee(event){
    let employeeName = event.nativeEvent.text.toLowerCase();
    let filteredEmployees = this._filterEmployee(employeeName);
    this.setState({dataSource: this.state.dataSource.cloneWithRows(filteredEmployees)});
  }

  _filterEmployee(employeeName){
    return this.props.employees.employees.filter((employee) => {
      let name = `${employee.firstName} ${employee.lastName}`;
      return name.toLowerCase().search(employeeName) !== -1;
    })
  }


} //end of class
