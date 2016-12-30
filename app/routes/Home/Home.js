import React, {Component} from 'react';
import {
  ListView,
  Text,
  View,
  TouchableHighlight,
  Image,
  TextInput
} from 'react-native';

import RestClient from '../../utils/RestClient';
import {ENV} from '../../../environment';
import {API} from '../../config/apis';
import styles from './styles.js';

export default class Home extends Component {

  constructor(props) {
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

  render() {
    return (
      <View style={{flex: 1}}>
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
