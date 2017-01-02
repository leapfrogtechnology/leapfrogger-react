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
            <View style={styles.phoneImageContainer}>
              <Image style={styles.phoneImage} source={require('../../images/ic_smartphone_black_24dp.png')}/>
            </View>
            <View style={styles.phoneDetails}>
              <Text>123456789</Text>
              <Text>123456789</Text>
              <Text>123456789</Text>
              {/*List of phone numbers*/}
            </View>
          </View>
          <View style={styles.emailDetailsContainer}>
            <View style={styles.emailImageContainer}>
              <Image style={styles.emailImage} source={require('../../images/ic_smartphone_black_24dp.png')}/>
            </View>
            <View>
              {/* Email */}
            </View>
          </View>
          <View style={styles.skypeDetailsContainer}>
            <View style={styles.skypeImageContainer}>
              <Image style={styles.skypeImage} source={require('../../images/ic_smartphone_black_24dp.png')}/>
            </View>
            <View>
              {/*Skype address*/}
            </View>
          </View>
          <View style={styles.addressDetailsConatiner}>
            <View style={styles.addressImageContainer}>
              <Image style={styles.addressImage} source={require('../../images/ic_smartphone_black_24dp.png')}/>
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