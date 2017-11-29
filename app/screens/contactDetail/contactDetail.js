import React, { Component } from 'react';
import { 
  View,
  Text,
  FlatList
 } from 'react-native';
import style from './styles';

 class ContactDetailScreen extends Component {

  constructor(props) {
    super(props);
  }

  _renderItem = () => {
    return (
      <View>

      </View>
    )
  }

  _renderTableView = () => {
    return (
      <FlatList
        renderItem={this._renderItem}
      />
    );
  }

  render() {
    return (
      <View style={ style.mainContainer }>
        
      </View>
    );
  }

 }

 export default ContactDetailScreen
