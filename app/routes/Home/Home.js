import React, { Component } from 'react';
import {
  ListView,
  Text,
  View,
  TouchableHighlight,
  Image } from 'react-native';

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

	_renderRow(employee) {
		return (
			<TouchableHighlight>
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
		    <ListView style={styles.container}
		      dataSource={this.state.employees}
		      renderRow={(employee) => this._renderRow(employee)}
		    />
		);
	}

} //end of class
