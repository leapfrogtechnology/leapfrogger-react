import React, { Component } from 'react';
import { 
  View,
  Text,
  Image,
  FlatList,
  ListView,
  Platform
 } from 'react-native';

import style from './styles'; 
import { getWidth, getHeight } from 'App/utils/dimension';
import ContactCell from './../contact/contactCell';
 
 class SearchContactView extends Component {

  constructor(props) {
    super(props);
    
    this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

    this.state = {
      selectedEmpId: null,
      dataSource: this.ds.cloneWithRows(this.props.data),
    }
  }

  componentDidMount() {
    this.didSearch = false
    this.setState({dataSource: this.ds.cloneWithRows(this.props.data)})
  }

  componentWillReceiveProps(newProps) {
    this.didSearch = true
    this.setState({      
      dataSource: this.ds.cloneWithRows(newProps.data),
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
      <View style={Platform.OS === 'android' ? style.listContainer : null}>
        <ListView
          key={'listView'}
          style={ Platform.OS === 'android' ? style.tableAndroid : null }
          dataSource={this.state.dataSource}
          renderRow={(item, index) => this._renderCell(item) }
          enableEmptySections={true}
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
