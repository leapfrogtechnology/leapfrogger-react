import React, { Component } from 'react';
import { 
  View,
  Text,
  Image,
  FlatList,
  Platform,
  ActivityIndicator,
  LayoutAnimation,
 } from 'react-native';

import style from './style';
import screens from 'App/constants/screens';
import ContactCell from './../contact/contactCell';
import StateFullScreen from 'App/components/stateFullScreen';

import emptyFav from './../../../assets/images/favorite.png';
import emptyFavOutline from './../../../assets/images/favorite-empty.png';

class FavoriteScreen extends Component {

  constructor(props) {
    super(props)
    this.state = {
      selectedEmpId: null,
    }
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

  _moreButtonOnPress = (empId) => {
    if (this.state.selectedEmpId === empId) {
      //If same more button is pressed even times, it needs to close
      this.setState({selectedEmpId: null})
    } else {
      // Odd time press opens the button
      this.setState({selectedEmpId: empId})
    }
  }

  _renderEmptyScreen = () => {
    return (
      <View style={[style.emptyView, {justifyContent: 'center'}]}>
        <Image source={emptyFavOutline} style={style.emptyFavImage}/>
        <Text style={style.emptyText}>Your Favorite Frogs will {'\n'} Live Here.</Text>
      </View>
    )
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

  _renderTableView = (data) => {
    return (
      <View style={Platform.OS === 'android' ? style.listContainer : null}>
        <FlatList
          style={ Platform.OS === 'android' ? style.tableAndroid : null }
          data={data}
          renderItem={(item) => this._renderCell(item.item, this.state.selectedEmpId) }
          keyExtractor={(item) => item.empId}
        />
      </View>
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
          emptyScreen={this._renderEmptyScreen()}
        />
      </View>
    )
  }

 }
 
 export default FavoriteScreen;
 