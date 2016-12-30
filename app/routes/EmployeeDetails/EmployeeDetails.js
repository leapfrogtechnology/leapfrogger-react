import React, {Component} from 'react';
import {
  Image,
  Text,
  View,
  StyleSheet
} from 'react-native';

import styles from './styles.js';

export default class EmployeeDetails extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <View style={styles.headerImageContainer}>
            <Image style={styles.headerImage} source={{uri: this.props.employee.avatarUrl}}/>
          </View>
          <View style={styles.headerNameContainer}>
            <Text style={styles.headerName}>{this.props.employee.firstName} {this.props.employee.lastName}</Text>
            <Text style={styles.headerName}>{this.props.employee.department.name}</Text>
            <Text style={styles.headerName}>{this.props.employee.designation}</Text>
          </View>
          {/*<View>*/}
          {/*<Image style={styles.favIcon} source={require('../../images/ic_add_black_24dp.png')}/>*/}
          {/*</View>*/}
        </View>
        <View style={styles.detailsContainer}>
          <View style={styles.phoneDetailsContainer}>
            <View>
              {/*Phone Image*/}
            </View>
            <View>
              {/*List of phone numbers*/}
            </View>
          </View>
          <View style={styles.emailDetailsContainer}>
            <View>
              {/*Email Image*/}
            </View>
            <View>
              {/* Email */}
            </View>
          </View>
          <View style={styles.skypeDetailsContainer}>
            <View>
              {/*Skype Image*/}
            </View>
            <View>
              {/*Skype address*/}
            </View>
          </View>
          <View style={styles.addressDetailsConatiner}>
            <View>
              {/*Address Image*/}
            </View>
            <View>
              {/*Address*/}
            </View>
          </View>
        </View>
      </View>
    );
  }
}