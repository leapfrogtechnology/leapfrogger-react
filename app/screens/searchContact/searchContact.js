import React, { Component } from 'react';
import { 
  View,
  Text,
  Image,
  FlatList
 } from 'react-native';

import style from './styles'; 
import { getWidth, getHeight } from 'App/utils/dimension';
import ContactCell from './../contact/contactCell';
 
 class SearchContactView extends Component {

  constructor(props) {
    super(props);
  }

  _onCellSelection = (data) => {
    this.props.onPress(data)
  }

  _renderCell = (item) => {
    return (
      <ContactCell
        data={item}
        onPress={this._onCellSelection}       
      />
    )
  }

  _keyExtractor = (item, index) => item.empId;
  
  _renderTableView = () => {
    return (
      <FlatList
        ref="ListView"
        data={this.props.data}
        keyExtractor={this._keyExtractor}        
        renderItem={({item, section, index}) => this._renderCell(item) }
      />
    );
  }

  render() {
    return (
      <View style={ style.mainContainer }>
        {
          this._renderTableView()
        }
      </View>
    );
  }

 }

 export default SearchContactView
