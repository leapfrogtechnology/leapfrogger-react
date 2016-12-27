import React, { Component } from 'react';
import {
  Image,
  Text,
  View,
  StyleSheet } from 'react-native';

import Button from '../../components/Button';

export default class EmployeeDetails extends Component{
  constructor(props) {
    super(props);
  }

  _separator(){
      return(
          <View style={{height:1, backgroundColor: 'lightgray', margin:5}}/>
      );
    }

    render() {
      return(
        <View style={styles.container}>
            <View style={{flex:1}}>
              <Image style={styles.image} source={{uri: this.props.employee.avatarUrl}}/>
            </View>
            <View style={{flex:2, padding:10}}>
              <Text style={styles.title}>{this.props.employee.firstName}</Text>
              {this._separator()}
            </View>
            <View style={{flex: 1}}>
              <Button onPress={() => this.props._goBack()} label='Go Back' />
            </View>
        </View>
      );
    }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    padding: 10,
    paddingTop: 70,
    flexDirection: 'row'
  },
  image: {
    height: 200
  },
  title: {
    fontSize: 25
  },
  subTitle:{
    fontSize: 20
  }
});
