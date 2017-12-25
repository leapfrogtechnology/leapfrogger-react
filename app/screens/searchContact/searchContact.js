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
    
    this.state = {
      selectedEmpId: null,
    }
  }

  componentDidMount() {
    this.didSearch = false
  }

  componentWillReceiveProps() {
    this.didSearch = true
  }

  _onCellSelection = (data) => {
    this.props.onPress(data)
  }

  _moreButtonOnPress = (empId) => {
    if (this.state.selectedEmpId === empId) {
      //If same more button is pressed even times, it needs to close
      this.setState({selectedEmpId: null})
    } else {
      // Odd time press opens the button
      this.setState({selectedEmpId: empId})
    }
    console.log('aaaa', this.state.selectedEmpId)
    this.forceUpdate()
  }


  _renderCell = (item) => {
    return (
      <ContactCell
        // {...this.props}
        data={item}
        onPress={this._onCellSelection}   
        moreButtonAction={this._moreButtonOnPress}
        showButtons={this.state.selectedEmpId === item.empId}
      />
    )
  }

  _keyExtractor = (item, index) => item.empId;
  
  _renderTableView = () => {
    return (
      <View style={style.listContainer}>
        <FlatList
          ref="ListView"
          data={this.props.data}
          keyExtractor={this._keyExtractor}        
          renderItem={({item, index}) => this._renderCell(item) }
        />
      </View>
    );
  }
  
  _renderSearchResult = () => {
    return (
      <View style={style.searchResult}>
        <Text>{this.props.data.length} results found</Text>
      </View>
    )
  }

  render() {
    return (
      <View style={ style.mainContainer }>
        {
          this.didSearch &&
          this._renderSearchResult()
        }
        {
          this._renderTableView()
        }
      </View>
    );
  }

 }

 export default SearchContactView
