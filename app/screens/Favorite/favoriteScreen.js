import React, { Component } from 'react';
import { 
  View,
  Text,
  Image,
  FlatList,
  ActivityIndicator,
  LayoutAnimation,
 } from 'react-native';

import style from './style';
import screens from 'App/constants/screens';
import ContactCell from './../contact/contactCell';
import StateFullScreen from 'App/components/stateFullScreen';
class FavoriteScreen extends Component {

  constructor(props) {
    super(props)

  }

  _onCellSelection = (data) => {
    this.props.navigator.push({
      screen: screens.PROFILE_SCREEN.id,
      animated: true,
      overrideBackPress: true,
      navigatorStyle: {
        drawUnderNavBar: true,
        navBarTranslucent: true,
        navBarTransparent: true,
        navBarTextColor: 'white',
        navBarTransparency: 1,  
        navBarButtonColor: 'white',                  
        navBarLeftButtonColor: 'white',
        navBarRightButtonColor: 'white',
      },
      title: '',
      passProps: {
        data: {
          profile: data
        }
      }        
    });
  }

  _renderTableView = (items) => {
    return (
      <FlatList
        ref="ListView"
        style={style.listView}
        data={items}
        keyExtractor={(item, index) => item.empId}
        renderItem={({item, index}) => 
          <ContactCell 
            {...this.props}          
            data={item} 
            onPress={this._onCellSelection}
          />
        }
      // renderSeparator={(sectionId, rowId) => <View key={rowId} style={style.separator}/>}        
      />
    );
  }

  _getScreenState = () => {
    if (this.props.favEmployees.length > 0) {
      return 'normal'
    }
    return 'empty';
  }

  render() {
    return(
      <View style={style.mainContainer}>
        <StateFullScreen
          style={style.mainContainer}
          state={this._getScreenState()} // fetch, normal and error
          contentView={this._renderTableView(this.props.favEmployees)}
          reloadButtonAction={() => this.props.fetchEmployeesAndDepartments()}
        />
      </View>
    )
  }

 }
 
 export default FavoriteScreen;
 