import React, { Component } from 'react';
import {
  View,
  Text,
  FlatList,
  Platform
 } from 'react-native';

import style from './styles';
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

  componentWillReceiveProps(newProps) {
    this.didSearch = true
    this.setState({
    })
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
  }


  _renderCell = (item) => {
    return (
      <ContactCell
        data={item}
        onPress={this._onCellSelection}
        moreButtonAction={this._moreButtonOnPress}
        showButtons={this.state.selectedEmpId === item.empId}
      />
    )
  }

  _keyExtractor = (item) => item.empId;

  _renderTableView = () => {
      console.log(this.props.data)
      return (
      <View style={Platform.OS === 'android' ? style.listContainer : style.listContaineriOS}>
        <FlatList
          style={ Platform.OS === 'android' ? style.tableAndroid : null }
          data={this.props.data}
          renderItem={(item) => this._renderCell(item.item) }
          enableEmptySections={true}
          keyExtractor={this._keyExtractor}
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
