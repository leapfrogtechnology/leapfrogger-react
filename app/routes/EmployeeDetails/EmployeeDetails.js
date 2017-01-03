import React, {Component} from 'react';
import {
  BackAndroid,
  Image,
  Text,
  View,
  StyleSheet,
  ScrollView
} from 'react-native';

import styles from './styles.js';

export default class EmployeeDetails extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    BackAndroid.addEventListener('hardwareBackPress', this.props._goBack)
  }

  componentWillUnmount() {
    BackAndroid.removeEventListener('hardwareBackPress', this.props._goBack)
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Image style={styles.headerBackgroundImage} source={require('../../images/hands-coffee-cup-apple-15.jpg')}>
            <View style={styles.headerImageContainer}>
              <Image style={styles.headerImage} source={{uri: this.props.employee.avatarUrl}}/>
            </View>
            <Text style={styles.headerName}>{this.props.employee.firstName} {this.props.employee.lastName}</Text>
            <Text style={styles.headerNameSub}>{this.props.employee.department.name}</Text>
            <Text style={styles.headerNameSub}>{this.props.employee.designation}</Text>
          </Image>
          {/*<View>*/}
          {/*<Image style={styles.favIcon} source={require('../../images/ic_add_black_24dp.png')}/>*/}
          {/*</View>*/}
        </View>
        <View style={styles.detailsContainer}>
          <ScrollView>
            <View style={styles.eachDetailsContainer}>
              <View style={styles.phoneImageContainer}>
                <Image style={styles.phoneImage} source={require('../../images/ic_smartphone_black_24dp.png')}/>
              </View>
              <View style={styles.phoneDetails}>
                <View style={styles.contactDetailsRow}>
                  <View style={styles.contactInfoContainer}>
                    <Text style={styles.contactInfo}>{this.props.employee.contact.mobilePhone}</Text>
                    <Text style={styles.contactInfoMore}>mobile</Text>
                  </View>
                  <Image style={[styles.phoneImage, styles.contactRowImage]}
                         source={require('../../images/ic_phone_white_24dp.png')}/>
                </View>
                <View style={styles.contactDetailsRow}>
                  <View style={styles.contactInfoContainer}>
                    <Text
                      style={styles.contactInfo}>{this.props.employee.contact.homePhone ? this.props.employee.contact.homePhone : '-'}</Text>
                    <Text style={styles.contactInfoMore}>emergency</Text>
                  </View>
                  <Image style={[styles.phoneImage, styles.contactRowImage]}
                         source={require('../../images/ic_home_black_24dp.png')}/>
                </View>
                <View style={styles.contactDetailsRow}>
                  <View style={styles.contactInfoContainer}>
                    <Text style={styles.contactInfo}>{this.props.employee.contact.mobilePhone}</Text>
                    <Text style={styles.contactInfoMore}>message</Text>
                  </View>
                  <Image style={[styles.phoneImage, styles.contactRowImage]}
                         source={require('../../images/ic_message_white_24dp.png')}/>
                </View>
                <View style={styles.divider}/>
              </View>
            </View>
            <View style={styles.eachDetailsContainer}>
              <View style={styles.phoneImageContainer}>
                <Image style={styles.phoneImage} source={require('../../images/ic_email_white_24dp.png')}/>
              </View>
              <View style={styles.phoneDetails}>
                <View style={styles.contactDetailsRow}>
                  <View style={styles.contactInfoContainer}>
                    <Text style={styles.contactInfo}>{this.props.employee.username}</Text>
                    <Text style={styles.contactInfoMore}>email</Text>
                  </View>
                </View>
                <View style={styles.divider}/>
              </View>
            </View>
            <View style={styles.eachDetailsContainer}>
              <View style={styles.phoneImageContainer}>
                <Image style={styles.phoneImage} source={require('../../images/ic_smartphone_black_24dp.png')}/>
              </View>
              <View style={styles.phoneDetails}>
                <View style={styles.contactDetailsRow}>
                  <View style={styles.contactInfoContainer}>
                    <Text style={styles.contactInfo}>{this.props.employee.contact.skypeId}</Text>
                    <Text style={styles.contactInfoMore}>skype</Text>
                  </View>
                </View>
                <View style={styles.divider}/>
              </View>
            </View>
            <View style={styles.eachDetailsContainer}>
              <View style={styles.phoneImageContainer}>
                <Image style={styles.phoneImage} source={require('../../images/ic_home_black_24dp.png')}/>
              </View>
              <View style={styles.phoneDetails}>
                <View style={styles.contactDetailsRow}>
                  <View style={styles.contactInfoContainer}>
                    <Text style={styles.contactInfo}>{this.props.employee.address.temporaryAddress}</Text>
                    <Text style={styles.contactInfoMore}>address</Text>
                  </View>
                </View>
                <View style={styles.divider}/>
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }
}