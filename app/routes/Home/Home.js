import React, { Component } from 'react';
import {
  ListView,
  Text,
  View,
  TouchableHighlight,
  Image,
  TextInput } from 'react-native';

import RestClient from '../../utils/RestClient';
import { ENV } from '../../../environment';
import { API } from '../../config/apis';

import styles from './styles.js';

export default class Home extends Component{

	constructor(props){
		super(props);
		const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    	this.state = {
      		employees: ds.cloneWithRows([])
    	};

    	RestClient.get(API.listEmployees, ENV.apiKey).then((data) => {
    		this.setState({employees: ds.cloneWithRows(data)});
    	});
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

	_renderRow(employee) {
		return (
			<TouchableHighlight
				underlayColor='#35b5ff'
				onPress={() => this.props._handleNavigate(this._makePayload(employee))}
			>
	          <View style={styles.row}>
	            <View style={{flex:3}}>
	              <Image style={styles.image} source={{uri: employee.avatarUrl}} />
	            </View>
	            <View style={{flex:10, padding: 10}}>
	              <Text style={styles.title}>{employee.firstName} {employee.lastName}</Text>
	            </View>
	            <View style={{flex:1, justifyContent: 'center'}}>
	              <Text style={styles.title}> > </Text>
	            </View>
	          </View>
	        </TouchableHighlight>
		);
	}

	render() {
		return (
			<View style={{flex:1}}>
				<View><TextInput placeholder='Search Employee' style={styles.searchBar}/></View>
			   	<View style={{flex: 1}}>
			   		<ListView style={styles.container}
				      dataSource={this.state.employees}
				      renderRow={(employee) => this._renderRow(employee)}
				    />
				</View>
			</View>
		);
	}

} //end of class
