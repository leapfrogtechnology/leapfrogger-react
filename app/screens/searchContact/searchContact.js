import React, { Component } from 'react';
import { 
  View,
  Text,
  Image,
  FlatList
 } from 'react-native';
 
import { getWidth, getHeight } from 'App/utils/dimension';
import style from './styles';
 
 class SearchContactView extends Component {

  constructor(props) {
    super(props);
  }



  _renderTableView = () => {
    return (
      <FlatList
        ref="ListView"
        data={[{key: 'a'}, {key: 'b'}]}
        renderItem={({item, section, index}) => this._renderItem() }
        renderScrollComponent={props => (
          this._renderParallaxTableHeaderView(props)
        )}
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
