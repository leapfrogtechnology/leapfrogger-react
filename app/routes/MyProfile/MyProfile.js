import React, {Component} from 'react';
import {
  BackAndroid,
  Image,
  Text,
  View,
  StyleSheet,
  ListView,
  ActivityIndicator,
  ScrollView
} from 'react-native';

import {getEmployeeFullName} from '../../utils/EmployeeUtils';
import styles from './styles.js';

export default class MyProfile extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    console.log('>>>>>>>>: ', this.props)
  }

  render() {
    console.log(this.props.employee)
    if(!this.props.employee){
      return (
        <ActivityIndicator
          style={[styles.centering, {height: 80}]}
          size="large"
        />
      );
    }
    return (
     <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Image style={styles.headerBackgroundImage} source={require('../../images/hands-coffee-cup-apple-15.jpg')}>
            <View style={styles.headerImageContainer}>
              <Image style={styles.headerImage} source={{uri: this.props.employee.avatarUrl}}/>
            </View>
            <Text style={styles.headerName}>{getEmployeeFullName(this.props.employee)}</Text>
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
                </View>
                <View style={styles.contactDetailsRow}>
                  <View style={styles.contactInfoContainer}>
                    <Text
                      style={styles.contactInfo}>{this.props.employee.contact.homePhone ? this.props.employee.contact.homePhone : '-'}</Text>
                    <Text style={styles.contactInfoMore}>emergency</Text>
                  </View>
                </View>
                <View style={styles.contactDetailsRow}>
                  <View style={styles.contactInfoContainer}>
                    <Text style={styles.contactInfo}>{this.props.employee.contact.mobilePhone}</Text>
                    <Text style={styles.contactInfoMore}>message</Text>
                  </View>
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
